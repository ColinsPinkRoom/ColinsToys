import { useState } from "react";
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

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
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
          ✕
        </button>
        <NavLink className={drawerClass} to="" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink className={drawerClass} to="/products" onClick={closeMenu}>
          Toys
        </NavLink>
        <NavLink className={navClass} to="/gallery" onClick={closeMenu}>
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
