import React from "react";
import { useNavigate } from "react-router-dom";
import "./Drinkspage.css";
import MenuVideo from "../asset/Menuvideo.mp4";
import CocktailImage from "../asset/Cocktailmain.jpg";
import OutdoorBeerImage from "../asset/OutdoorBeer.jpg";

const Drinkspage: React.FC = () => {
  const navigate = useNavigate();

  // Data for each menu box
  const boxes = [
    {
      imageUrl: CocktailImage,
      title: "DRINKS",
      buttonText: "Start Sipping",
      onClick: () => navigate("/drinks"),
      textColor: "white",
      buttonColor: "rgba(255, 255, 255, 0.8)",
    },
    {
      imageUrl: OutdoorBeerImage,
      title: "MAIN MENU",
      buttonText: "View Menu",
      onClick: () => navigate("/menu"),
      textColor: "white",
      buttonColor: "rgba(255, 255, 255, 0.8)",
    },
  ];

  return (
    <div className="menu-page">
      <video
        className="menu-video"
        src={MenuVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="menu-boxes-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="menu-box"
            style={{ backgroundImage: `url(${box.imageUrl})` }}
          >
            <div className="menu-box-content" style={{ color: box.textColor }}>
              <h2 className="menu-box-title">{box.title}</h2>
              <button
                className="menu-box-button"
                style={{ backgroundColor: box.buttonColor }}
                onClick={box.onClick}
              >
                {box.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinkspage;