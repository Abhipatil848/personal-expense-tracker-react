import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function AddTransaction() {
    const[products, setproducts] = useState([])

    useEffect(()=>{
        loadProducts();
      },[])
      const loadProducts=async()=>{
        const result = await axios.get("http://localhost:8080/products");
        setproducts(result.data);
      }
  return (
    <Container>
      <div className="col-md-6 col-sm-12">
        <Form className="mb-3 mt-5">
          <Form.Select as={Row} aria-label="Default select example">
            <option>ProductName</option>
            {
               products.map((product,index)=>(
                <option key={index}>
                        {product.productName}    
                </option>
              ))
            }
          </Form.Select>

          <Form.Group    className="mb-3 mt-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Amount" />
          </Form.Group>
          <Form.Group  className="mb-3 mt- 3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>

          <Button variant="primary" size="lg">
            AddTransaction
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default AddTransaction;
