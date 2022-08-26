import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ListTransaction() {
  const [transactions,settransactions]=useState([]);

  useEffect(()=>{
    loadTransactions();
  },[])

  const loadTransactions=async()=>{
    const result = await axios.get("http://localhost:8080/transactions");
    settransactions(result.data);
  }
  return (
    <div className='container mt-5'>
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
          transactions.map((transaction,index)=>(
          <tr key={index}>
            <td >{index+1}</td>
            <td>{transaction.productName}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>          
          </tr>
        ))

      }
      </tbody>
    </Table>
    </div>
    
  );
}

export default ListTransaction;