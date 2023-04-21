package com.example.testReact.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testReact.entity.Employee;

@RestController
@RequestMapping("Employee")
public class EmployeeController {

	private List<Employee> listEmployee = new ArrayList<Employee>();

	@GetMapping("/GetHelloWorld")
	public String GetHelloWorld() {
		return "Hello : world";
	}

	@GetMapping("")
	public List<Employee> Employee() {
		return listEmployee;
	}

	@PostMapping("")
	public HashMap<String, String> Employee(@RequestBody HashMap<String, String> str) {
		System.out.println("Incoming Post Request /Employee: " + str);

		listEmployee.add(new Employee(Integer.parseInt(str.get("id")), str.get("name")));

		HashMap<String, String> map = new HashMap<>();
		map.put("id", "66");

		return map;
	}

	@GetMapping("/Delete")
	public String Employee(@RequestParam int id) {
		System.out.println("Incoming Post Request /Employee/Delete: " + id);

		int i = 0;
		for (Employee e : listEmployee) {
			if (e.getId() == id) {
				listEmployee.remove(i);
				break;
			}
			i++;
		}

		return "Hello";
	}
}
