import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-button active" : "nav-button";

  return (
    <>
      <nav className="nav-bar">
        {/* Top row: primary */}
        <div className="nav-links primary-nav">
          <NavLink className={navClass} to="">
            Home
          </NavLink>
          <NavLink className={navClass} to="/products">
            Toys
          </NavLink>
          <NavLink className={navClass} to="/gallery">
            Gallery
          </NavLink>
          <NavLink className={navClass} to="/prices">
            Prices
          </NavLink>
          <NavLink className={navClass} to="/contact">
            Contact
          </NavLink>
        </div>

        {/* Bottom row: secondary */}
        <div className="nav-links secondary-nav">
          <NavLink className={navClass} to="/links">
            Links
          </NavLink>
          <NavLink className={navClass} to="/socials">
            Socials
          </NavLink>
          {/* <NavLink className={navClass} to="/about">
            About
          </NavLink> */}
          <NavLink className={navClass} to="/updates">
            Updates
          </NavLink>
        </div>
      </nav>
    </>
  );
}
