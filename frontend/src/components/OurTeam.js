import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/vendors/owl-carousel/css/owl.carousel.css';
import '../assets/vendors/owl-carousel/css/owl.theme.default.css';
import '../assets/css/ollie.css';

export default function OurTeam() {

  // TODO: need debugging - not displayed in frontend
  // TODO: add photos and statements of everyone in the training :)
  return (
    <section className="section" id="testmonial">
      <div className="container">
        <h3 className="section-title">Our Team</h3>
        <div id="owl-testmonial" className="owl-carousel owl-theme mt-4">

          <div className="item">
            <div className="textmonial-item">
              {/* <img src='../assets/imgs/4.jpg' className="avatar" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" /> */}
              <div className="des">
                <h5 className="ti-quote-left font-weight-bold" />
                <p>statement 1</p>
                <h5 className="ti-quote-left text-right font-weight-bold" />
                <div className="line" />
                <h6 className="name">Emma Re</h6>
                <h6 className="xs-font">Full stack developer</h6>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="textmonial-item">
              {/* <img src="avatar2.jpg" className="avatar" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" /> */}
              <div className="des">
                <h5 className="ti-quote-left font-weight-bold" />
                <p>statement 2</p>
                <h5 className="ti-quote-left text-right font-weight-bold" />
                <div className="line" />
                <h6 className="name">John Doe</h6>
                <h6 className="xs-font">Graphic Designer</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 