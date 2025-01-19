import React, { useState, useRef } from "react";
import Navbar from "./Navbar"; // Import Navbar component
import "./Menu.css";
import DrinkMenu from "./DrinkMenu";
import FoodMenu from "./FoodMenu";

const MenuBoxes: React.FC = () => {
  const [showDrinkMenu, setShowDrinkMenu] = useState(false);
  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null); // Ref to scroll to sections

  const toggleDrinkMenu = () => {
    setShowDrinkMenu((prev) => {
      const newState = !prev;
      if (newState) {
        setShowFoodMenu(false); // Ensure Food Menu is hidden when showing Drink Menu
        scrollToSections();
      }
      return newState;
    });
  };

  const toggleFoodMenu = () => {
    setShowFoodMenu((prev) => {
      const newState = !prev;
      if (newState) {
        setShowDrinkMenu(false); // Ensure Drink Menu is hidden when showing Food Menu
        scrollToSections();
      }
      return newState;
    });
  };

  const scrollToSections = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + 400, // Adjust '200' for desired scroll amount
        behavior: "smooth",
      });
    }, 100); // Delay to allow content rendering before scrolling
  };

  const boxes = [
    {
      imageUrl: require("../asset/Cocktailmain.jpg"),
      title: "DRINKS MENU",
      buttonText: "Start Sipping",
      onClick: toggleDrinkMenu,
      textColor: "white",
      buttonColor: "rgba(255, 255, 255, 0.8)",
    },
    {
      imageUrl: require("../asset/Biryani.jpg"),
      title: "FOOD MENU",
      buttonText: "View Menu",
      onClick: toggleFoodMenu,
      textColor: "white",
      buttonColor: "rgba(255, 255, 255, 0.8)",
    },
  ];

  return (
    <div className="menu-container">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Video Section */}
      <div className="menu-video-container">
        <video
          className="menu-video"
          src={require("../asset/Menuvideo.mp4")}
          autoPlay
          loop
          muted
        />
      </div>

      {/* Boxes Section */}
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

      {/* Buttons Section */}
      {showDrinkMenu && (
        <div className="menu-buttons-container">
          <button className="menu-button" onClick={() => alert("Reserve a Table clicked!")}>
            Reserve a Table
          </button>
          <button
            className="menu-button"
            onClick={() => window.open("/Drinksmenu.pdf", "_blank")}
          >
            Download Drinks Menu
          </button>
        </div>
      )}

      {showFoodMenu && (
        <>
      
        <div className="menu-buttons-container">
          <button className="menu-button" onClick={() => alert("Order Online clicked!")}>
           Reserve a Table
          </button>
          <button
            className="menu-button"
            onClick={() => window.open("/FoodMenu.pdf", "_blank")}
          >
            Download Food Menu
          </button>
          <button className="menu-button" onClick={() => alert("Order Online clicked!")}>
            Order & Collect at Restaurant
          </button>
        </div>
        
        </>
      )}

      {/* Menu Sections */}
      {(showDrinkMenu || showFoodMenu) && (
        <div className="menu-sections-columns" ref={sectionsRef}>
          {showDrinkMenu && <DrinkMenu />}
          {showFoodMenu && <FoodMenu />}
        </div>
      )}
    </div>
  );
};

export default MenuBoxes;