import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(false); // Track navbar position
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Routes where the navbar should always remain at the top
      const alwaysAtTopRoutes = [
        "/about",
        "/contact",
        "/menus",
        "/reservations",
        "/view",
        "/work-with-us",
      ];

      if (alwaysAtTopRoutes.includes(location.pathname)) {
        setIsAtTop(true); // Keep navbar at the top
        return;
      }

      // For Home Page or other routes: Dynamic scrolling behavior
      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        setIsAtTop(true); // Move navbar to the top
      } else if (currentScrollY < lastScrollY) {
        setIsAtTop(false); // Move navbar to the bottom
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, location.pathname]);

  useEffect(() => {
    // Ensure navbar is positioned correctly when navigating directly to routes
    const alwaysAtTopRoutes = [
      "/about",
      "/contact",
      "/menus",
      "/reservations",
      "/view",
      "/work-with-us",
    ];
    if (alwaysAtTopRoutes.includes(location.pathname)) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  }, [location.pathname]);

  return (
    <header className={`navbar ${isAtTop ? "top" : "bottom"}`}>
      <div className="navbar-logo">THE SEVEN HARROW</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/reservations">Online Reservations</Link>
        <Link to="/menus">Menus</Link>
        <Link to="/events">Private Events</Link>
        <Link to="/view">View</Link>
        {/* <Link to="/work-with-us">Work With Us</Link>
        <Link to="/email-signup">Email Signup</Link> */}
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;