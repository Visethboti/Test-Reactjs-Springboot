package com.example.testReact.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.testReact.entity.Employee;

@Service
public class EmployeeServiceImplInMemory implements EmployeeService {

	private List<Employee> listEmployee = new ArrayList<Employee>();

	@Override
	public List<Employee> findAll() {
		return listEmployee;
	}

	@Override
	public Employee findById(int employeeID) {
		for (Employee e : listEmployee) {
			if (e.getId() == employeeID) {
				return e;
			}
		}
		return null;
	}

	@Override
	public void save(Employee employee) {
		if (findById(employee.getId()) == null) {
			listEmployee.add(employee);
		} else {
			int i = 0;
			for (Employee e : listEmployee) {
				if (e.getId() == employee.getId()) {
					listEmployee.set(i, employee);
					break;
				}
				i++;
			}
		}
	}

	@Override
	public void deleteById(int employeeID) {
		int i = 0;
		for (Employee e : listEmployee) {
			if (e.getId() == employeeID) {
				listEmployee.remove(i);
				break;
			}
			i++;
		}
	}

}
