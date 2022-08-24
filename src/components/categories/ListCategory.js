import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ListCategory() {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    loadCategories();
  },[])
  
  const loadCategories= async() =>{
    const result = await axios.get("http://localhost:8080/categories");
    setCategories(result.data);
  }
  return (
    <div className='container mt-5'>
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>category Name</th>
          
        </tr>
      </thead>
      <tbody>
        {
          categories.map((category,index)=>(
            <tr key={index}>
              <td >{index+1}</td>
              <td>{category.categoryName}</td>
                     
            </tr>
          ))

        }
        
      
      </tbody>
    </Table>
    </div>
    
  );
}

export default ListCategory;