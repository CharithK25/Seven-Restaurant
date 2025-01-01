import React from "react";
import homes from "../asset/homes.mp4";
import Allmix from "../asset/Allmix.jpg";
import OutdoorBeer from "../asset/OutdoorBeer.jpg";
import kebab from "../asset/kebab.jpg";
import LargeImage from "../asset/Garden.jpg"; // Import the large image

import "./Hero.css";

const Hero: React.FC = () => {
  // Images array with imported images
  const images = [
    { src: OutdoorBeer, alt: "Outdoor Beer Image" },
    { src: kebab, alt: "Kebab Image" },
    { src: LargeImage, alt: "Graden Image" },
  ];

  return (
    <>
      <section className="hero">
        {/* Video Background */}
        <video className="hero-video" src={homes} autoPlay loop muted />

        {/* Overlay Content */}
        <div className="hero-overlay">
          <div className="hero-text">
            {/* <h1>Welcome to Our Site</h1>
            <p>Your engaging tagline goes here!</p> */}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section">
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>
       {/* Large Image at the Bottom */}
       {/* <footer className="large-image-section">
        <img className="large-image" src={LargeImage} alt="Large Featured Image" />
      </footer> */}
    </>
  );
};

export default Hero;