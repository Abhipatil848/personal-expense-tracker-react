import Table from 'react-bootstrap/Table';

function ListProduct() {
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
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td >Larry </td>
          <td>the Bird</td>
         
        </tr>
      </tbody>
    </Table>
    </div>
    
  );
}

export default ListProduct;