import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddCategory() {

  let navigate =useNavigate();
  
  const [category, setCategory] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const { categoryName, categoryDescription } = category;

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/category", category);
    navigate("/listcategory");
  };

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group as={Row} className="mb-3 mt-5">
        <Form.Label column sm="2">
          Category Name
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={(e) => onInputChange(e)}
          />
        </Col>
        
      </Form.Group>

      <Form.Group as={Row} className="mb-3 mt-3">
        <Form.Label column sm="2">
          Category Description
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="text"
            name="categoryDescription"
            value={categoryDescription}
            onChange={(e) => onInputChange(e)}
          />
        </Col>
      </Form.Group>
      <Col sm="5">
        <Button type="submit">Add Category</Button>
      </Col>
    </Form>
  );
}

export default AddCategory;
