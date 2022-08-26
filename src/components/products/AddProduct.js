import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [product, setproduct] = useState({
    productName: "",
    productDescription: "",
    "category":{
      "id":""
    }
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const result = await axios.get("http://localhost:8080/categories");
    setCategories(result.data);
  };
  const onInputChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };
  const {productName,productDescription,category} = product;
  const addProduct = async () => {
    const product = await axios.post("http://localhost:8080/product",product);
    console.log(product.data);
  };

  return (
    <Container>
      <Form className="mb-3 mt-5" onSubmit={(e) => addProduct(e)}>
        <Form.Group as={Row} className="mb-3 mt-5">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="4">
            <Form.Select aria-label="Default select example">
              <option>Category</option>
              {categories.map((category, index) => (
                <option key={index}>{category.categoryName}</option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-5">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => onInputChange(e)}
            />
          </Col>
          <div className="productname"></div>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="2">
            Product Description
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              name="productDescription"
              value={productDescription}
              onChange={(e) => onInputChange(e)}
            />
          </Col>
        </Form.Group>
        <Col sm="5">
          <Button type="submit">Add Product</Button>
        </Col>
      </Form>
    </Container>
  );
}

export default AddProduct;
