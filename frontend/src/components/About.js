import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  const baseURL = "http://192.168.0.14:5000/";

  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="section-title">About Insurance Fraud</h3>
              <p>
                Facts about Insurance Fraud
              </p>
              {/* TODO: link to another page */}
              <a href="javascript:void(0)">Read more...</a>
            </div>

            <div className="col-md-8">
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