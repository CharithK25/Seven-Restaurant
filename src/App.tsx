import React from "react";
// import Header from "./Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Datepicker from "./components/Datepicker";
import Contact from "./components/Contact";
import About from "./components/About";
import Privateevents from "./components/Privateevents";
import AboutUs from "./components/View";
import MenuBoxes from "./components/Menu";
import DrinksPage from "./components/Drinkspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";


const App: React.FC = () => {
  return (
    <div className="App">
      <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Privateevents />} />
        <Route path="/view" element={<AboutUs/>} />
        <Route path="/menus" element={<MenuBoxes/>} />
        {/* <Route path="/drinks" element={<DrinksPage />} /> */}
      
      </Routes>
    </Router>
    </>
      
    </div>
  );
};

export default App;