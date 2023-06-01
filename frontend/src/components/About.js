import React from 'react';

export default function About() {

  return (
    <>
      <section className="section py-5" id="about">
        <div className="container my-2 mx-auto px-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="section-title display-4 my-5">Insurance Claim Fraud</h3>
              <p className='my-5'>
                Insurance fraud is a deliberate deception perpetrated against or by an insurance company for financial gain.
              </p>
              <p className='my-5'>
                The Insurance Bureau of Canada estimates that insurance fraud costs insurance industry up to $9.2 billion yearly. That amount is estimated across several liability areas.
              </p>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <div className="widget flex-fill">
                    <div className="image-wrapper">
                      <img src="life-insurance.png" width="35" height="35" alt="Life Insurance Image" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">$3.6 bil</h4>
                      <p>Life Insurance</p>
                    </div>
                  </div>

                  <div className="widget flex-fill">
                    <div className="image-wrapper">
                        <img src="protection.png" width="35" height="35" alt="Worker Compensation Image" />
                      </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">$1.4 bil</h4>
                      <p>Worker Compensation</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6">
                  <div className="widget flex-fill">
                  <div className="image-wrapper">
                      <img src="house.png" width="35" height="35" alt="Property and Casualty Image" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">$0.7 bil</h4>
                      <p>Property and Casualty</p>
                    </div>
                  </div>

                  <div className="widget flex-fill">
                  <div className="image-wrapper">
                      <img src="car.png" width="35" height="35" alt="Auto Image" />
                    </div>
                    <div className="infos-wrapper">
                      <h4 className="text-primary">$2.2 bil</h4>
                      <p>Auto Insurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <h3 className="section-title my-5 display-4">Our Services</h3>
          <p> C348 Group is committed to deterring fraud. Our dedicated team of fraud experts also works closely with industry associations, government and law enforcement to help protect you against fraud 24/7.</p>
          <div className="row my-5 text-center">
            <div className="col-lg-4">
              <a href="/file-claim" className="card border-0 text-dark">
                <img className="card-img-top" src="fraud_detection.jpg" alt="Fraud Detection Image" />
                <span className="card-body">
                  <h4 className="title mt-4">Fraud Detection</h4>
                  <p className="xs-font">Leveraging the next-generation machine learning algorithms, our system can instantly identify inconsistencies and flag suspicious insurance claims, delivering accurate results to keep your business secure and protected.</p>
                  <a href='/file-claim'> Try our Vehicle Insurance Fraud Detector </a>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/file-claim" className="card border-0 text-dark">
                <img className="card-img-top" src="fraud_analysis.jpg" alt="Fraud Analysis Image" />
                <span className="card-body">
                  <h4 className="title mt-4">Fraud Analysis</h4>
                  <p className="xs-font">Our team of specialized investigators, backed by professional analytical tools, meticulously scrutinizes every facet of your insurance claims.</p>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/file-claim" className="card border-0 text-dark">
                <img className="card-img-top" src="fraud_consulting.jpg" alt="Fraud Consulting Image" />
                <span className="card-body">
                  <h4 className="title mt-4">Fraud Consulting</h4>
                  <p className="xs-font">Our experts offer personalized consultations, diagnosing potential vulnerabilities in your insurance claims process. </p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
} 