import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ListProduct() {
  const [products,setproducts]=useState([]);

  useEffect(()=>{
    loadProducts();
  },[])

  const loadProducts=async()=>{
    const result = await axios.get("http://localhost:8080/products");
    setproducts(result.data);
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
        {
          products.map((product,index)=>(
          <tr key={index}>
            <td >{index+1}</td>
            <td>{product.productName}</td>
            <td>{product.productDescription}</td>          
          </tr>
        ))

      }
      </tbody>
    </Table>
    </div>
    
  );
}

export default ListProduct;