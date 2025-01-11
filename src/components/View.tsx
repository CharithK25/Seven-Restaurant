import React from "react";
import "./View.css";
import storyImage from "../asset/image1.png";
import widestVarietyIcon from "../asset/image1.png";
import qualitySourcingIcon from "../asset/image2.png";
import lowPricesIcon from "../asset/image3.png";
import meatImage from "../asset/Panipoori.jpg";
import steakImage from "../asset/MOMO.jpg"; // Replace with the actual image

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
    <div className="view-container">
      {/* Story Section */}
      <section className="story-section">
        <img src={storyImage} alt="Our Story" className="story-image" />
        <div className="story-overlay">
          <h2 className="story-title">OUR STORY</h2>
        </div>
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

      {/* Variety Section */}
      <section className="variety-section">
        <div className="variety-content">
          <h2 className="variety-title">BIG ON VARIETY</h2>
          <p className="variety-description">
            We've got the best variety of meat and seafood <strong>anywhere</strong>. Choose from over <strong>700 products</strong> (including <strong>450+ meat & seafood items!</strong>), from everyday grocery staples to rare finds like premium Wagyu and exotic meats that'll inspire your inner chef.
          </p>
          <p className="variety-description">
            Complete any meal with <strong>appetizers, sides, seasonings, fruits, veggies, breads, and desserts</strong> that pair perfectly with our proteins. When you’re hungry and in a hurry, we also offer <strong>pre-seasoned meats</strong> prepped with chef-inspired flavors alongside <strong>heat-and-eat dishes</strong>.
          </p>
        </div>
        <div className="variety-image-container">
          <img src={meatImage} alt="Variety of Meat and Seafood" className="variety-image" />
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="quality-image-container">
          <img src={steakImage} alt="Steak on Grill" className="quality-image" />
        </div>
        <div className="quality-content">
          <h2 className="quality-title">BIGGER ON QUALITY</h2>
          <p className="quality-description">
            We’re serious about what makes it on your plate. Our butchers, product developers, and in-house chefs <strong>hand-select and taste-test every product we source</strong>. We ensure every product is free from over 100 common ingredients that don’t meet our high-quality standards.
          </p>
          <p className="quality-description">
            No one beats our beef, which comes from farms in Nebraska and Colorado. Our beef and pork is <strong>aged to perfection</strong> to bring you the best flavor, and then we blast freeze all of our products to lock in taste and tenderness in every bite.
          </p>
          <button className="quality-button">LEARN ABOUT SOURCING</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;