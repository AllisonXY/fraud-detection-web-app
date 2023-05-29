import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Partials
import Header from "./components/partial/Header";
import Footer from "./components/partial/Footer";

// Pages
import Home from "./components/Homepage";
import FraudCheck from "./components/FraudCheck";
import About from "./components/About";

export default class ReactRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fraud-check" element={<FraudCheck />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    );
  }
}
