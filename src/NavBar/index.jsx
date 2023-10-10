import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar expand="lg" className='d-flex justify-content-between justify-content-lg-center align-items-center'>
      <Container className='navContainer'>
        <Navbar.Brand href="/"><b>Eni<font color='#d78500'>Portfolio</font></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center text-lg-end">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/">About me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>  
  );
}

