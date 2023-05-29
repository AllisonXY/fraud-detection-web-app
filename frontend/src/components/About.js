import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  const baseURL = "http://192.168.0.14:5000/";

  return (
    <>
      <section className="section" id="about">
        <div className="container my-2 mx-auto px-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="section-title display-4 my-4">About Insurance Fraud</h3>
              <p className='my-5'>
              Vehicle insurance fraud involves conspiring to make false or exaggerated claims involving property damage or personal injuries following an accident.
              </p>
              <p className='my-5'>
              Some common examples include staged accidents where fraudsters deliberately “arrange” for accidents to occur; the use of phantom passengers where people who were not even at the scene of the accident claim to have suffered grievous injury, and make false personal injury claims where personal injuries are grossly exaggerated.
              </p>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <div className="widget">
                    <div className="icon-wrapper">
                      <i className="ti-user" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">xxx</h4>
                      <p>stats about insurance fraud</p>
                    </div>
                  </div>

                  <div className="widget">
                    <div className="icon-wrapper">
                      <i className="ti-face-smile" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">yyy</h4>
                      <p>stats</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6">
                  <div className="widget">
                    <div className="icon-wrapper">
                      <i className="ti-calendar" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">zzz</h4>
                      <p>stats</p>
                    </div>
                  </div>

                  <div className="widget">
                    <div className="icon-wrapper">
                      <i className="ti-star" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">kkk</h4>
                      <p>stats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
} 