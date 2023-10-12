import React from 'react';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Row>
    <Navbar expand="lg">
      <Container className='navContainer'>
        <Navbar.Brand className='logo' href="/"><b><font color='#fff'>Eni</font><font color='#dfb15b'>Portfolio</font></b></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>    
    </Navbar>  
    </Row>
  );
}

