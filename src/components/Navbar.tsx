import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";




const Navbar: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(false); // Tracks if the navbar should be at the top
  const location = useLocation(); // Get current route

  // Routes where the navbar should always remain at the top
  const alwaysAtTopRoutes = [
    "/about",
    "/contact",
    "/menus",
    "/reservations",
    "/view",
    "/work-with-us",
    "/events",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (alwaysAtTopRoutes.includes(location.pathname)) {
        setIsAtTop(true); // Navbar stays at the top for specific routes
        return;
      }

      // Dynamic behavior for other routes (e.g., Home Page)
      if (window.scrollY > 30) {
        setIsAtTop(true); // Move navbar to the top
      } else {
        setIsAtTop(false); // Move navbar to the bottom
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Re-run effect when the route changes

  // Ensure correct position when navigating directly to routes
  useEffect(() => {
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
        <Link to="/events">Host Your Party</Link>
        <Link to="/view">View</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;