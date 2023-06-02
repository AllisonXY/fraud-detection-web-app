import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/vendors/owl-carousel/css/owl.carousel.css';
import '../assets/vendors/owl-carousel/css/owl.theme.default.css';
import '../assets/css/ollie.css';

export default function OurTeam() {

  return (
    <section className="about my-5 pb-5" id="testmonial">
      <div className="container">
        <h3 className="section-title display-3 my-5 ">Our Team</h3>
          <h2 className="section-title display-5 my-5 pt-5">Full Stack Development Team</h2>
          <OwlCarousel id="owl-testmonial" className="owl-carousel owl-theme my-5" items={2} autoplay={true} loop={true}>
            <div className="item">
              <div className="textmonial-item">
                <img src='/team-pics/allison.jpeg' alt="Team member picture" className="avatar" />
                <div className="des">
                  <p>"Done is better than perfect."</p>
                  <div className="line" />
                  <h6 className="name">Allison Cheng</h6>
                  <h6 className="xs-font">Full Stack Developer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/kiran.png" alt="Team member picture" className="avatar" />
                <div className="des">
                  <p>"Never have a Zero Day."</p>
                  <div className="line" />
                  <h6 className="name">Kirandeep Sahmbi</h6>
                  <h6 className="xs-font">Full Stack Developer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/adil.png" alt="Team member picture" className="avatar" />
                <div className="des">
                  <p>"Feed the alligators and you get bigger alligators."</p>
                  <div className="line" />
                  <h6 className="name">Adil Hameed</h6>
                  <h6 className="xs-font">Full Stack Developer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/ziqian.jpeg" alt="Team member picture" className="avatar" />
                <div className="des">
                  <p>"I love Harry Potter and my Cat and my Sharks."</p>
                  <div className="line" />
                  <h6 className="name">Ziqian Qiu</h6>
                  <h6 className="xs-font">Full Stack Developer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/seif.jpeg" alt="Team member picture" className="avatar" />
                <div className="des">
                  <p>"The secret of getting ahead is getting started."</p>
                  <div className="line" />
                  <h6 className="name">Seif El Tobgy</h6>
                  <h6 className="xs-font">Full Stack Developer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/sylvie.jpeg" alt="Team member picture" className="avatar" />
                <div className="des">
                  <p>"The best way to predict the future is to create it."</p>
                  <div className="line" />
                  <h6 className="name">Sylvie Piya</h6>
                  <h6 className="xs-font">Full Stack Developer</h6>
                </div>
              </div>
            </div>
          </OwlCarousel>
          <div>
            <h2 className="section-title display-5 my-5 pt-5">Machine Learning Team</h2>
          </div>
          <OwlCarousel id="owl-testmonial" className="owl-carousel owl-theme my-5" items={2} autoplay={true} loop={true}>
            <div className="item">
              <div className="textmonial-item">
                <img src='/team-pics/siyuan.jpeg' alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"Create your own sunshine."</p>
                  <div className="line" />
                  <h6 className="name">Siyuan Sun</h6>
                  <h6 className="xs-font">Machine Learning Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/vijitha.jpeg" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"I'm not lazy, I'm on energy-saving mode."</p>
                  <div className="line" />
                  <h6 className="name">Vijitha Alva</h6>
                  <h6 className="xs-font">Machine Learning Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/nasim.jpeg" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"Don't count the days; make the days count."</p>
                  <div className="line" />
                  <h6 className="name">Nasim Samei</h6>
                  <h6 className="xs-font">Machine Learning Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/ghazal.jpg" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"Believe you can, and you're halfway there."</p>
                  <div className="line" />
                  <h6 className="name">Ghazal Hashemi</h6>
                  <h6 className="xs-font">Machine Learning Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/juhi.png" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"Hakuna Matata."</p>
                  <div className="line" />
                  <h6 className="name">Juhi Shah</h6>
                  <h6 className="xs-font">Machine Learning Engineer</h6>
                </div>
              </div>
            </div>
          </OwlCarousel>
          <div>
            <h2 className="section-title display-5 my-5 pt-5">DevOps Team</h2>
          </div>
          <OwlCarousel id="owl-testmonial" className="owl-carousel owl-theme my-5" items={2} autoplay={true} loop={true}>
            <div className="item">
              <div className="textmonial-item">
                <img src='/team-pics/harsh.png' alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"When life give you lemon drink milk."</p>
                  <div className="line" />
                  <h6 className="name">Harsh Patel</h6>
                  <h6 className="xs-font">DevOps Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/jennifer.jpeg" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"Beyonce."</p>
                  <div className="line" />
                  <h6 className="name">Jennifer Nnadi</h6>
                  <h6 className="xs-font">DevOps Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/kirtik.jpeg" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"When everyone zinks, you zoink."</p>
                  <div className="line" />
                  <h6 className="name">Kirtik Bahrani</h6>
                  <h6 className="xs-font">DevOps Engineer</h6>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="textmonial-item">
                <img src="/team-pics/emily.jpeg" alt="Team member picture" className="avatar"/>
                <div className="des">
                  <p>"Dream big and dare to fail."</p>
                  <div className="line" />
                  <h6 className="name">Emily Franklin</h6>
                  <h6 className="xs-font">DevOps Engineer</h6>
                </div>
              </div>
            </div>
          </OwlCarousel>
      </div>
    </section>

  );
} 
