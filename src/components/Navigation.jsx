import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-button active" : "nav-button";

  const drawerClass = ({ isActive }) =>
    isActive ? "drawer-link active" : "drawer-link";

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button className="hamburger" onClick={toggleMenu}>
        <svg
          className="hamburger-icon"
          viewBox="0 0 100 80"
          width="28"
          height="28"
          fill="none"
          stroke="#6b2b4d"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <line x1="10" y1="20" x2="90" y2="20" />
          <line x1="10" y1="40" x2="90" y2="40" />
          <line x1="10" y1="60" x2="90" y2="60" />
        </svg>
      </button>

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
          <NavLink className={navClass} to="/contact">
            Contact
          </NavLink>
        </div>

        {/* Bottom row: secondary */}
        <div className="nav-links secondary-nav">
          <NavLink className={navClass} to="/prices">
            Prices
          </NavLink>
          <NavLink className={navClass} to="/links">
            Links
          </NavLink>
          <NavLink className={navClass} to="/socials">
            Socials
          </NavLink>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          <svg
            className="close-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#6b2b4d"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>
        <NavLink className={drawerClass} to="" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink className={drawerClass} to="/products" onClick={closeMenu}>
          Toys
        </NavLink>
        <NavLink className={drawerClass} to="/gallery" onClick={closeMenu}>
          Gallery
        </NavLink>
        <NavLink className={drawerClass} to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
        <NavLink className={drawerClass} to="/socials" onClick={closeMenu}>
          Socials
        </NavLink>
        <NavLink className={drawerClass} to="/prices" onClick={closeMenu}>
          Prices
        </NavLink>
      </div>

      {/* Backdrop when drawer is open */}
      {menuOpen && <div className="drawer-backdrop" onClick={closeMenu} />}
    </>
  );
}
