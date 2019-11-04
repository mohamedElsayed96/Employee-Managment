package com.employee.managment.entity;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

@Entity
public class Employee {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String hr_code;
	@Pattern(regexp = "^[0-9]*$")
	private String mobile_number;
	@Email
	private String email;
	public Employee(String name, String hr_code, String mobile_number, String email) {
		this.name = name;
		this.hr_code = hr_code;
		this.mobile_number = mobile_number;
		this.email = email;
	}
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHr_code() {
		return hr_code;
	}
	public void setHr_code(String hr_code) {
		this.hr_code = hr_code;
	}
	public String getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	

}
