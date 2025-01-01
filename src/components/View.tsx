import React from "react";
import "./AboutUs.css";
import storyImage from "../assets/image1.jpg"; // Replace with your image path
import widestVarietyIcon from "../assets/image1.png"; // Replace with your icon path
import qualitySourcingIcon from "../assets/image2.png"; // Replace with your icon path
import lowPricesIcon from "../assets/image3.png"; // Replace with your icon path

interface IconProps {
  imageSrc: string;
  title: string;
}

const IconCard: React.FC<IconProps> = ({ imageSrc, title }) => (
  <div className="icon-card">
    <img src={imageSrc} alt={title} className="icon-image" />
    <p className="icon-title">{title}</p>
  </div>
);

const AboutUs: React.FC = () => {
  const missionIcons: IconProps[] = [
    { imageSrc: widestVarietyIcon, title: "WIDEST VARIETY" },
    { imageSrc: qualitySourcingIcon, title: "QUALITY SOURCING" },
    { imageSrc: lowPricesIcon, title: "EVERYDAY LOW PRICES" },
  ];

  return (
    <div className="about-us-container">
      {/* Story Section */}
      <section className="our-story">
        <img src={storyImage} alt="Our Story" className="story-image" />
        <h2 className="our-story-title">OUR STORY</h2>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="mission-title">MEAT IS OUR MISSION</h2>
        <p className="mission-description">
          We're a modern-day meat and seafood market on a mission to change the way people shop for and eat protein.
        </p>
        <div className="icons-container">
          {missionIcons.map((icon, index) => (
            <IconCard key={index} imageSrc={icon.imageSrc} title={icon.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;