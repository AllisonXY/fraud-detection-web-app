import React from "react";
import { Navbar, Nav, Carousel } from 'react-bootstrap';

// import stylesheets for font icons, owl carousel and Bootstrap + Ollie main styles
import '../../assets/vendors/themify-icons/css/themify-icons.css';
import '../../assets/vendors/owl-carousel/css/owl.carousel.css';
import '../../assets/vendors/owl-carousel/css/owl.theme.default.css';
import '../../assets/css/ollie.css';

//add navigation bar 
export default function Header() {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>

      <Navbar id="scrollspy"
        className="navbar-light bg-light navbar-expand-lg fixed-top"
        data-spy="affix" data-offset-top="20">
        <div className="container">
          <Navbar.Brand href="#">
            {/* image must be in public folder */}
            <img src="logo.png" width="130" height="100"  
                 className="d-inline-block align-top" alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/fraud-check">Fraud Check</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/our-team">Our Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml-0 ml-lg-4">
                <Nav.Link href="components.html" className="btn btn-primary">Components</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Carousel fade>
          <Carousel.Item>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">We Detect <br/> Fraudulant Insurance Claims </h1>
              <button className="btn btn-primary btn-rounded">Learn More</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">We Unmask Deception <br/> Uphold Integrity</h1>
              <button className="btn btn-primary btn-rounded">Learn More</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">We Protect <br/> Your Business Interests</h1>
              <button className="btn btn-primary btn-rounded">Learn More</button>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="infos container mb-4 mb-md-2">
          <div className="title">
            <h5>C348 Group</h5>
            <p className="font-small">Awesome services as always.</p>
          </div>
          <div className="socials text-right">
            <div className="row justify-content-between">
              <div className="col">
                <a className="d-block subtitle"><i className="ti-microphone pr-2" /> (123) 456-7890</a>
                <a className="d-block subtitle"><i className="ti-email pr-2" /> info@wiley.com</a>
              </div>
              <div className="col">
                <h6 className="subtitle font-weight-normal mb-2">Social Media</h6>
                <div className="social-links">
                  <a href="javascript:void(0)" className="link pr-1"><i className="ti-facebook" /></a>
                  <a href="javascript:void(0)" className="link pr-1"><i className="ti-twitter-alt" /></a>
                  <a href="javascript:void(0)" className="link pr-1"><i className="ti-google" /></a>
                  <a href="javascript:void(0)" className="link pr-1"><i className="ti-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </header>

  );
}



