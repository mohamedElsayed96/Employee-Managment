package com.employee.managment.service;

import java.util.List;
import java.util.Map;

import org.aspectj.weaver.patterns.ExactTypePattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.employee.managment.entity.Employee;
import com.employee.managment.repository.EmployeeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	public List<Employee> findAll(Map<String,String> searchParams, int pageNum, int pageSize) 
	{
		
		
//		System.out.println("page number" + pageNum);
		if(searchParams.size() <= 0 )
		{
			if(pageSize <= 0)
			{
				return employeeRepository.findAll();

			}
			
			Pageable pag = PageRequest.of(pageNum - 1, pageSize);
			return employeeRepository.findAll(pag).toList();
		}
		else
		{

		
			List<Employee> emps = employeeRepository.search(searchParams, pageSize, pageNum);
			return emps;
		}
	}
	public Employee find(int id) 
	{
		return employeeRepository.findById(id).isPresent() ? employeeRepository.findById(id).get(): null;
	}
	
	public Employee add(Employee emp) 
	{
		return employeeRepository.save(emp);
	}

	
}
