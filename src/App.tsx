import React from "react";
// import Header from "./Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Datepicker from "./components/Datepicker";
import Contact from "./components/Contact";
import About from "./components/About";
import Privateevents from "./components/Privateevents";
import Reservations from "./components/Reservations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <>
      <Router>
      <Navbar />
      <Routes>
      {/* <Hero /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Privateevents />} />
        <Route path="/view" element={<view/>} />

        {/* Add other routes here */}
      </Routes>
    </Router>
    </>
      {/* <Footer /> */}
      {/* <Datepicker/> */}
      {/* <Reservations/> */}
      {/* <Navbar />
      <Contact/>
      <About/> */}
    </div>
  );
};

export default App;