import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Image 
            src="/images/cs.png"
            alt="Logo"
            style={{ 
              float: 'left', 
              marginRight: '50px', 
              height: '40px'
            }}
          />
          {/*<Navbar.Brand id="home" as={NavLink} to="/home" key="home" className="nav-linker" >Home</Navbar.Brand>*/}
          <Nav className="me-auto">
            <Nav.Link id="home" as={NavLink} to="/home" key="home" className="nav-linker" >Home</Nav.Link>
            <Nav.Link id="appliances" as={NavLink} to="/appliances" key="appliances" className="nav-linker" >Carousel</Nav.Link>
            <Nav.Link id="features" as={NavLink} to="/features" key="features" className="nav-linker" >Interactive</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavbarComponent;