import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Icon from 'react-bootstrap-icons';
import style from '../style/style.module.css'


function NavBar() {
  const expand = "md"
  const dd = <Icon.Person size={30} />
  return (
    <>
      <Navbar bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand ><Link className={[style.decorenone, "text-dark"].join(" ")} to="/">Tronic Store</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Welcom to Tronic Store
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">
                  <Icon.Cart3 size={28} />
                </Nav.Link>
                <Nav.Link href="/">$ 0.0 </Nav.Link>
                <Nav.Link href="/">
                  <Icon.Heart size={28} />
                </Nav.Link>
                <NavDropdown
                  title={dd}
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">LogIn</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    SignUp
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;