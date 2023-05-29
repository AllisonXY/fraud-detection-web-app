import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src="logo192.png" width="30" height="30" 
          className="d-inline-block align-top" alt="Logo"/>
        {' '}
        Home Page
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/predict">Fraud Detection</Nav.Link>
      </Nav>
    </Navbar>
  );
}



