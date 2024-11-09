import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand id="home" as={NavLink} to="/home" key="home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id="appliances" as={NavLink} to="/appliances" key="appliances">Carousel</Nav.Link>
            <Nav.Link id="features" as={NavLink} to="/features" key="features">Interactive</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavbarComponent;