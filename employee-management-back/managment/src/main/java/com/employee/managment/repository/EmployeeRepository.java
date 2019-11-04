package com.employee.managment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import com.employee.managment.entity.Employee;

public interface EmployeeRepository extends QueryByExampleExecutor<Employee>, JpaRepository<Employee, Integer> , EmployeeCustomRepository{

}
