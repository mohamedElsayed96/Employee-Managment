package com.employee.managment.service;

import java.util.List;
import java.util.Map;

import org.aspectj.weaver.patterns.ExactTypePattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.employee.managment.entity.Employee;
import com.employee.managment.repository.EmployeeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	public List<Employee> findAll(Map<String,String> searchParams, int pageNum, int pageSize) 
	{
		
		
		if(searchParams.size() <= 0) {
			
			return employeeRepository.findAll();
		}
		else
		{
//			final ObjectMapper mapper = new ObjectMapper(); // jackson's objectmapper
//			final Employee pojo = mapper.convertValue(queryParams, Employee.class);
//			return employeeRepository.findAll(Example.of(pojo));
			return employeeRepository.search(searchParams);
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
