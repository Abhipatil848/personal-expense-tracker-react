import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ListCategory() {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    loadCategories();
  },[])
  
  const loadCategories= async() =>{
    const result =axios.get("http://localhost:8080/api/categories");
    console.log(result.data);
  }
  return (
    <div className='container mt-5'>
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Product Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
         
        </tr>
      
      </tbody>
    </Table>
    </div>
    
  );
}

export default ListCategory;