import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function AddCategory() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3 mt-5" >
        <Form.Label column sm="2">
          Category Name 
        </Form.Label>
        <Col sm="4">
          <Form.Control type="Normal Text"  />
        </Col>
        <div className="categoryname"></div>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 mt-3" >
        <Form.Label column sm="2">
          Category Description
        </Form.Label>
        <Col sm="4">
          <Form.Control type="Normal text" />
        </Col>
      </Form.Group>
      <Col sm ="5">
     <Button type="submit">Add Category</Button>
     </Col>
    </Form>
    
  );
}

export default AddCategory;