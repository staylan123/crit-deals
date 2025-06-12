import { Container, Navbar, Nav } from "react-bootstrap";
import { IoGameController } from "react-icons/io5";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center gap-2 brand-color"
        >
          <IoGameController size={24} />
          <span>Crit Deals</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
