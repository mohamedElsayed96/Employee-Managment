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
	
	
	public Page<Employee> findAll(Map<String,String> searchParams, long[] size, int pageNum, int pageSize) 
	{
		
		
		pageNum--;
//		System.out.println("page number" + pageNum);
		Pageable pag = PageRequest.of(pageNum, pageSize);
		if(searchParams.size() <= 0 )
		{
			Page<Employee> emps = employeeRepository.findAll(pag);
			size[0]  = emps.getTotalElements();
			
			return emps;
		}
		else
		{

		
			List<Employee> emps = employeeRepository.search(searchParams, size , pag);
			int startIndex = pageNum * pageSize;
			int endIndex = startIndex + pageSize  > emps.size() ? emps.size(): startIndex + pageSize;
			Page<Employee> ems = new PageImpl<Employee>(emps.subList(startIndex, endIndex), pag, emps.size());
			return ems;
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
