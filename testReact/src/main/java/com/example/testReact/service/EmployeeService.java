package com.example.testReact.service;

import java.util.List;

import com.example.testReact.entity.Employee;

public interface EmployeeService {
	public List<Employee> findAll();

	public Employee findById(int employeeID);

	public void save(Employee employee);

	public void deleteById(int employeeID);
}
