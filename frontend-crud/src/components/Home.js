import {Button, Table} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() { 
  const [items, setItems] = useState([]);
  const history = useNavigate();

  const handleDelete = (id) => {
    
    fetch("/Employee/Delete?id="+id)
      .then(res => res.json());

    setItems(items.filter(i => i.id != id)); 

    history('/');
  }

  useEffect(() => {
    fetch("/Employee")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        }
      )
    }, []) // , [])  mean run only onced when rendered, empty mean run everytime the page load

  return (
    <>
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {
              items && items.length > 0
              ?
              items.map((item) => {
                return(
                  <tr>
                      <td>
                          {item.id}
                      </td>
                      <td>
                          {item.name}
                      </td>
                      <td>
                          <Link to={'/Update/'+item.id}>
                              <Button>Update</Button>
                          </Link>
                          <Button onClick={() => {handleDelete(item.id)}}>Delete</Button>
                      </td>
                  </tr>
                )
              })
              :
              "No Data Avaible"
            }
          </tbody>
        </Table>
        <br>
        </br>
        <Link className="d-grid" to={"/Create"}>
            <Button size="lg">Create</Button>
        </Link>
    </>
  );
}

export default Home;
