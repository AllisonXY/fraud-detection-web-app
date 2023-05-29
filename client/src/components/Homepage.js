import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const baseURL = "http://192.168.0.14:5000/";

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>

      <main>
        <p>Welcome to Fraud detection web app.</p>
        <a href={baseURL + "predict"} id="predictionLink">Prediction Page</a>
      </main>
    </>
  );
} 

  

