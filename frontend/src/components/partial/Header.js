import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import stylesheets for font icons, owl carousel and Bootstrap + Ollie main styles
import '../../assets/vendors/themify-icons/css/themify-icons.css';
import '../../assets/vendors/owl-carousel/css/owl.carousel.css';
import '../../assets/vendors/owl-carousel/css/owl.theme.default.css';
import '../../assets/css/ollie.css';

//add navigation bar 
export default function Header() {
  return (
    <header id="home">
      <Navbar id="scrollspy" className="navbar-light bg-light navbar-expand-lg fixed-top my-0" data-spy="affix" data-offset-top="20">
        <Container>
          <Navbar.Brand className="mt-0 mb-5 py-0" href="/">
            <img src="logo.png" className="logo rounded" alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/" className="h3 mx-4">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about" className="h3 mx-4">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/our-team" className="h3 mx-4">Our Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/fraud-check" className="h3 mx-4 file-claim">File a Claim</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact-us" className="h3 mx-4">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  );
}



