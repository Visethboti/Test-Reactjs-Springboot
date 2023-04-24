import { useState, useEffect, createContext, useContext } from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { useNavigate } from "react-router-dom";


import { EmployeeContext } from "./EmployeeContext";

// import { EmployeeContext } from "./Update";
// import { EmployeeContext } from "./Create";


function EmployeeForm() {
    const employee = useContext(EmployeeContext);
    const [newEmployee, setNewEmployee] = useState({});
    
    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEmployee)
        };
        fetch('/Employee', requestOptions)
            .then(response => response.json())

        history('/');
    }

    useEffect(() => {
        setNewEmployee({name: employee.name, id: employee.id});
    }, [])

    return (
        <>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <FormGroup className="mb-3" controlId="formID">
                    <Label>ID</Label>
                    <Input type="number" placeholder="Enter ID" onChange={(e) => setNewEmployee(previousState => {return { ...previousState, id: e.target.value }})} value={newEmployee.id} required/>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formName">
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter Name" onChange={(e) => setNewEmployee(previousState => {return { ...previousState, name: e.target.value }})} value={newEmployee.name} required/>
                </FormGroup>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </>
    );
}

export default EmployeeForm;