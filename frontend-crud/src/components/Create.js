import { useState, useEffect, createContext, useContext } from "react";

import EmployeeForm from "./EmployeeForm";


import { EmployeeContext } from "./EmployeeContext";

// export const EmployeeContext = createContext();

function Create() {
    const [employee, setEmployee] = useState({});

    const newEmployee = {
        id: null,
        name: ""
    }

    useEffect(() => {
        setEmployee(newEmployee);
    }, [])

    return (
        <EmployeeContext.Provider value={employee}>
            <EmployeeForm/>
        </EmployeeContext.Provider>
    );
}

export default Create;