import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/vendors/owl-carousel/css/owl.carousel.css';
import '../assets/vendors/owl-carousel/css/owl.theme.default.css';
import '../assets/css/ollie.css';

export default function Home() {
  const baseURL = "http://192.168.0.14:5000/";

  // add carousel 
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>

      <main>
        <p>Pending text and images about fraud detection</p>
      </main>
    </>
  );
}
