package com.employee.managment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ManagmentApplication {

	public static void main(String[] args) {
		System.out.println("host.docker.internal");
		SpringApplication.run(ManagmentApplication.class, args);
	}

}
