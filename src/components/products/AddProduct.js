  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import Row from 'react-bootstrap/Row';
  import Button from 'react-bootstrap/Button';

  function AddProduct() {
    return (
      <Form>
        <Form.Group as={Row} className="mb-3 mt-5" >
          <Form.Label column sm="2">
            Product Name 
          </Form.Label>
          <Col sm="4">
            <Form.Control type="Normal Text"  />
          </Col>
          <div className="productname"></div>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3" >
          <Form.Label column sm="2">
            Product Description
          </Form.Label>
          <Col sm="4">
            <Form.Control type="Normal text" />
          </Col>
        </Form.Group>
        <Col sm ="5">
      <Button type="submit">Add Product</Button>
      </Col>
      </Form>
      
    );
  }

  export default AddProduct;