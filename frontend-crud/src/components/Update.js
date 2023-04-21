import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Update() {
    let { id } = useParams();
    alert(id);

    const [newID, setID] = useState('');
    const [name, setName] = useState('');
    
    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = newID;
        let b = name;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newID: a,
                                name: b })
        };
        fetch('/Employee', requestOptions)
            .then(response => response.json())

        history('/');
    }

    return (
        <>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <FormGroup className="mb-3" controlId="formID">
                    <Label>ID</Label>
                    <Input type="number" placeholder="Enter ID" onChange={(e) => setID(e.target.value)}/>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formName">
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </>
    );
}

export default Update;