import { useState, useEffect, createContext, useContext } from "react";

import { useParams } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

import { EmployeeContext } from "./EmployeeContext";

// export const EmployeeContext = createContext();

function Update() {
    let {id} = useParams();

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch("/Employee/"+ id)
          .then(res => res.json())
          .then(
            (result) => {
                setEmployee(result);
                alert(employee.id + " " + employee.name);
            }
          )
        }, [])


    return (
        <EmployeeContext.Provider value={employee}>
            <EmployeeForm/>
        </EmployeeContext.Provider>
    );
}

export default Update;