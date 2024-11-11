import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  useEffect(() => {
    // Check if the animation has already run in this session
    const hasAnimated = sessionStorage.getItem('navbarAnimated');

    if (!hasAnimated) {
      const timer = setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-linker');
        navLinks.forEach((link, index) => {
          link.style.animation = `slideIn 0.5s forwards ${index * 0.1}s`;
          link.style.opacity = 1; // Set opacity to 1 when animating
        });
        // Set the flag in sessionStorage
        sessionStorage.setItem('navbarAnimated', 'true');
      }, 5500); // 5 seconds delays

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    } else {
      // If already animated, set opacity to 1 immediately
      const navLinks = document.querySelectorAll('.nav-linker');
      navLinks.forEach(link => {
        link.style.opacity = 1;
      });
    }
  }, []);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto w-100 d-flex justify-content-between">
            <Nav.Link id="home" as={NavLink} to="/home" key="home" className="nav-linker" style={linkStyle}>Home</Nav.Link>
            <Nav.Link id="appliances" as={NavLink} to="/appliances" key="appliances" className="nav-linker" style={linkStyle}>Informative Carousel</Nav.Link>
            <Nav.Link id="features" as={NavLink} to="/features" key="features" className="nav-linker" style={linkStyle}>Interactive Energy Meter</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .nav-linker {
          opacity: 0; /* Initially hidden */
        }
      `}</style>
    </>
  );
}

const linkStyle = {
  opacity: 0, // Initially hidden
};

export default NavbarComponent;