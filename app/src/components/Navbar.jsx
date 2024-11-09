import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Carousel</Nav.Link>
            <Nav.Link href="#features">Interactive</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavbarComponent;