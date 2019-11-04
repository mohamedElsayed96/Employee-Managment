package com.employee.managment.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.employee.managment.entity.Employee;
import com.employee.managment.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/employees")
	public ResponseEntity<?> getEmployees(@RequestParam Map<String,String> allRequestParams)//, @RequestParam(required = false) String name, @RequestParam(required = false) String mobile_number,
//			@RequestParam(required = false) String hr_code,  @RequestParam(required = false) String email)
	{
		int page_num = 1;
		int page_size = 5;
		
		try {
			String pageNum = allRequestParams.get("page_num");
			String pageSize = allRequestParams.get("page_size");
			page_num = Integer.parseInt(pageNum);
			page_size = Integer.parseInt(pageSize);
			allRequestParams.remove("page_num");
			allRequestParams.remove("page_size");

		} catch (Exception e) {
			// TODO: handle exception
		}
		List<Employee> employees = employeeService.findAll(allRequestParams, page_num, page_size);
		return ResponseEntity.status(200).body(employees);
	}
	@GetMapping("/employees/{id}")
	public ResponseEntity<?> getEmployee(@PathVariable int id)
	{
		
		Employee emp = employeeService.find(id);
		return ResponseEntity.status(200).body(emp);
	}
	@PostMapping("/employees")
	public ResponseEntity<?> addEmployee(@Valid @RequestBody Employee emp)
	{
		System.out.println(emp.getEmail());
		employeeService.add(emp);
		return ResponseEntity.status(200).build();
	}
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleValidationExceptions(
	  MethodArgumentNotValidException ex) {
	    Map<String, String> errors = new HashMap<>();
	    ex.getBindingResult().getAllErrors().forEach((error) -> {
	        String fieldName = ((FieldError) error).getField();
	        String errorMessage = error.getDefaultMessage();
	        errors.put(fieldName, errorMessage);
	    });
	    return errors;
	}
}
