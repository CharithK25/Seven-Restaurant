import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar"; // Import Navbar component
import "./Menu.css";
import DrinkMenu from "./DrinkMenu";
import FoodMenu from "./FoodMenu";

const MenuBoxes: React.FC = () => {
  const [showSections, setShowSections] = useState(false); // Controls visibility of sections
  const [isSectionOpen, setIsSectionOpen] = useState<{ [key: string]: boolean }>({}); // Tracks open/close state of individual sections
  const [showButtons, setShowButtons] = useState(false); // Controls visibility of the buttons
  const sectionsRef = useRef<HTMLDivElement>(null); // Ref to scroll to sections
  const [shouldScroll, setShouldScroll] = useState(false); // Controls when to trigger scroll
  const [showDrinkMenu, setShowDrinkMenu] = useState(false);
  const [showFoodMenu, setShowFoodMenu] = useState(false); 

  const toggleSectionVisibility = () => {
    setShowSections((prev) => {
      const newState = !prev;
      if (newState) {
        setShowButtons(true); // Show buttons only when toggling sections on
        setShowDrinkMenu(true); // Ensure DrinkMenu is shown
  
        // Trigger scroll slightly down after ensuring the sections are shown
        setTimeout(() => {
          const offset = 500; // Adjust this value to control how far it scrolls down
          const yPosition = window.scrollY + offset;
          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }, 100); // Small delay to allow the sections to render
      } else {
        setShowButtons(false); // Hide buttons when toggling sections off
        setShowDrinkMenu(false); // Hide DrinkMenu when sections are off
      }
      return newState;
    });
    setIsSectionOpen({}); // Reset all sections to closed when toggling visibility
  };
  const toggleDrinkMenu = () => {
  setShowDrinkMenu((prev) => !prev);
  setShowFoodMenu(false); // Ensure Food Menu is hidden when showing Drink Menu
  setShouldScroll(true);  // Optional: Scroll to the menu section
};

const toggleFoodMenu = () => {
  setShowFoodMenu((prev) => !prev);
  setShowDrinkMenu(false); // Ensure Drink Menu is hidden when showing Food Menu
  setShouldScroll(true);   // Optional: Scroll to the menu section
};

  const toggleSection = (section: string) => {
    setIsSectionOpen((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle individual section open/close
    }));
  };

  useEffect(() => {
    if (shouldScroll && showSections) {
      // Delay scroll to ensure sections are fully rendered
      setTimeout(() => {
        sectionsRef.current?.scrollIntoView({ behavior: "smooth" });
        setShouldScroll(false); // Reset scroll trigger
      }, 10); // 100ms delay
    }
  }, [shouldScroll, showSections]);

  const menuSections = [
    { title: "SEVEN SPECIAL COCKTAILS", key: "signatureServes" },
    { title: "CLASSIC COCKTAILS & MARTINIS", key: "classicCocktails" },
    { title: "WINES", key: "bartenderTwists" },
    { title: "BEERS", key: "tripCBD" },
    { title: "RUM", key: "sharersShotPaddles" },
    { title: "WHISKEY", key: "rose" },
    { title: "VODKA", key: "champagne" },
    { title: "COGNAC", key: "sparkling" },
    { title: "NON ALCOHOLIC DRINKS", key: "nonAlcoholicCocktails" },
  ];

  const boxes = [
    {
      imageUrl: require("../asset/Cocktailmain.jpg"),
      title: "DRINKS MENU",
      buttonText: "Start Sipping",
      onClick: toggleSectionVisibility,
      textColor: "white",
      buttonColor: "rgba(255, 255, 255, 0.8)",
    },
    {
      imageUrl: require("../asset/OutdoorBeer.jpg"),
      title: "FOOD MENU",
      buttonText: "View Menu",
      onClick: toggleSectionVisibility,
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
      {showButtons && (
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

      {/* Menu Sections */}
      {showSections && (
  <div className="menu-sections-columns" ref={sectionsRef}>
    <DrinkMenu />
    <FoodMenu />
  </div>
)}
    </div>
  );
};

export default MenuBoxes;