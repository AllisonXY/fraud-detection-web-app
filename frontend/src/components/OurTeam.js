import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OurTeam() {
  const baseURL = "http://192.168.0.14:5000/";

  // TODO: add photos and statements of everyone in the training :)
  return (
    <>
      <section className="section" id="testmonial">
        <div className="container">
          <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
          <h3 className="section-title">Testmonials</h3>
          <div id="owl-testmonial" className="owl-carousel owl-theme mt-4">
            <div className="item">
              <div className="textmonial-item">
                <img src="avatar1.jpg" className="avatar" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" />
                <div className="des">
                  <h5 className="ti-quote-left font-weight-bold" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea facere voluptatum corrupti doloremque odit sequi labore rerum maiores libero.adipisicing elit. Vitae quasi voluptatem sed quaerat dolorum architecto reiciendis magni laboriosam, illum, nobis, quae dolor, ducimus libero! Sapiente deleniti sit dolor, ex possimus.</p>
                  <h5 className="ti-quote-left text-right font-weight-bold" />
                  <div className="line" />
                  <h6 className="name">Emma Re</h6>
                  <h6 className="xs-font">Full stack developer</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="textmonial-item">
                <img src="avatar2.jpg" className="avatar" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" />
                <div className="des">
                  <h5 className="ti-quote-left font-weight-bold" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea facere voluptatum corrupti doloremque odit sequi labore rerum maiores libero.adipisicing elit. Vitae quasi voluptatem sed quaerat dolorum architecto reiciendis magni laboriosam, illum, nobis, quae dolor, ducimus libero! Sapiente deleniti sit dolor, ex possimus.</p>
                  <h5 className="ti-quote-left text-right font-weight-bold" />
                  <div className="line" />
                  <h6 className="name">John Doe</h6>
                  <h6 className="xs-font">Graphic Designer</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="textmonial-item">
                <img src="avatar3.jpg" className="avatar" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" />
                <div className="des">
                  <h5 className="ti-quote-left font-weight-bold" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea facere voluptatum corrupti doloremque odit sequi labore rerum maiores libero.adipisicing elit. Vitae quasi voluptatem sed quaerat dolorum architecto reiciendis magni laboriosam, illum, nobis, quae dolor, ducimus libero! Sapiente deleniti sit dolor, ex possimus.</p>
                  <h5 className="ti-quote-left text-right font-weight-bold" />
                  <div className="line" />
                  <h6 className="name">Emily Roe</h6>
                  <h6 className="xs-font">Freelancer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 