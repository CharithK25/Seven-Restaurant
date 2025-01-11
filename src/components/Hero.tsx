import React, { useRef } from "react";
import homes from "../asset/homes.mp4";
import OutdoorBeer from "../asset/OutdoorBeer.jpg";
import kebab from "../asset/kebab.jpg";
import MOMO from "../asset/MOMO.jpg";
import Lambchops from "../asset/Lambchops.jpg";
import Garden from "../asset/Garden.jpg";
import InstagramIcon from "../asset/Instagram-icon.png"; // Instagram icon path
import FacebookIcon from "../asset/Facebook-icon.png"; // Facebook icon path
import Night from "../asset/NightShisha.jpg";
// import FacebookIcon from "../asset/Facebook-icon.png";

import "./Hero.css";

const Hero: React.FC = () => {
  const images = [
    { src: OutdoorBeer, alt: "Outdoor Beer Image" },
    { src: kebab, alt: "Kebab Image" },
    { src: MOMO, alt: "MOMO Image" },
    { src: Lambchops, alt: "Lamb Chops Image" },
    { src: Garden, alt: "Garden Image" },
    { src: Night, alt: "Night Shisha Image" },
  ];

  const imageGridRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (imageGridRef.current) {
      imageGridRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (imageGridRef.current) {
      imageGridRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <section className="hero">
        <video className="hero-video" src={homes} autoPlay loop muted playsInline />
        <div className="hero-overlay"></div>
      </section>

      <section className="image-grid-section">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#8249;
        </button>

        <div className="image-grid" ref={imageGridRef}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </section>

      <footer className="footer">
        <div className="footer-column">
          <h3>GET TO KNOW US</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Process</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Delivery Options</li>
            <li>Find a Store</li>
            <li>Community Outreach</li>
            <li>Wild Fork Donation</li>
          </ul>
        </div>
      
        <div className="footer-column">
          <h3>LET US HELP YOU</h3>
          <ul>
            <li>FAQ</li>
            <li>Phone</li>
            <li>Email</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect with us</h3>
          <ul>
            
            {/* Adding Instagram and Facebook with icons */}
            <li>
              <img src={InstagramIcon} alt="Instagram" className="social-icon" /> Instagram
            </li>
            <li>
              <img src={FacebookIcon} alt="Facebook" className="social-icon" /> Facebook
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© 2025 The Seven Harrow</p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;