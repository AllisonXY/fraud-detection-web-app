import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/vendors/owl-carousel/css/owl.carousel.css';
import '../assets/vendors/owl-carousel/css/owl.theme.default.css';
import '../assets/css/ollie.css';

export default function Home() {

  return (
    <main className="header mb-5">
      <div className="overlay"></div>
      <Carousel fade className='carousel' prevLabel={null} nextLabel={null} indicators={false}>
        <Carousel.Item>
          <div className="carousel-caption d-none d-md-block text-center">
            <h1 className="carousel-title">We Detect <br/> Fraudulent Insurance Claims </h1>
            <a href='/about'>
              <button className="btn btn-primary btn-rounded">Learn More</button>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption d-none d-md-block text-center">
            <h1 className="carousel-title">We Unmask Deception <br/> Uphold Integrity</h1>
            <a href='/about'>
              <button className="btn btn-primary btn-rounded">Learn More</button>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption d-none d-md-block text-center">
            <h1 className="carousel-title">We Protect <br/> Your Business Interests</h1>
            <a href='/about'>
              <button className="btn btn-primary btn-rounded">Learn More</button>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="infos container mb-4 mb-md-2">
        <div className="socials">
          <div className="row justify-content-between">
            <div className='col'>
              <a className="d-block subtitle">C348 Group</a>
              <a className="d-block subtitle">Awesome Services As Always</a>
            </div>
            <div className="col">
              <a className="d-block subtitle"><i className="ti-microphone pr-2" /> (123) 456-7890</a>
              <a className="d-block subtitle"><i className="ti-email pr-2" /> info@wiley.com</a>
            </div>
            <div className="col">
              <h6 className="subtitle font-weight-normal mb-2">Social Media</h6>
              <div className="social-links">
                <a href="/contact-us" className="link pr-1"><i className="ti-facebook" /></a>
                <a href="/contact-us" className="link pr-1"><i className="ti-twitter-alt" /></a>
                <a href="/contact-us" className="link pr-1"><i className="ti-google" /></a>
                <a href="/contact-us" className="link pr-1"><i className="ti-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
