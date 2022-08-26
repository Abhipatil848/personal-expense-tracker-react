import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ETNav() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Personal Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#">Product</Nav.Link> */}
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addproduct">Add Product</NavDropdown.Item>
              <NavDropdown.Item href="/listproducts">
                List Product
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addcategory">Add Category</NavDropdown.Item>
              <NavDropdown.Item href="/listcategory">
                List Category
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Transaction" id="basic-nav-dropdown">
              <NavDropdown.Item href="/listtransaction">
                List Transaction
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ETNav;