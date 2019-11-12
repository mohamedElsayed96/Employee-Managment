package com.employee.managment.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;

import com.employee.managment.entity.Employee;

public interface EmployeeCustomRepository {
	List<Employee> search(Map<String, String> searchParams, long[] size, Pageable pag);

}
