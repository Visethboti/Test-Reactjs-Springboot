package com.example.testReact.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testReact.entity.Employee;
import com.example.testReact.service.EmployeeService;

@RestController
@RequestMapping("Employee")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@GetMapping("/GetHelloWorld")
	public String GetHelloWorld() {
		return "Hello : world";
	}

	@GetMapping("")
	public List<Employee> Employee() {
		System.out.println("Incoming Get Request /Employee");
		return employeeService.findAll();
	}

	@PostMapping("")
	public void Employee(@RequestBody HashMap<String, String> map) {
		System.out.println("Incoming Post Request /Employee: " + map);

		employeeService.save(new Employee(Integer.parseInt(map.get("id")), map.get("name")));
	}

	@GetMapping("/{id}")
	public Employee FindByIds(@PathVariable String id) {
		System.out.println("Incoming Get Request /Employee/: " + id);

		return employeeService.findById(Integer.parseInt(id));
	}

	@GetMapping("/Delete")
	public void Employee(@RequestParam int id) {
		System.out.println("Incoming Post Request /Employee/Delete: " + id);

		employeeService.deleteById(id);
	}
}
