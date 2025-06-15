import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className="nav-bar">
        {/* Desktop nav (hidden on mobile) */}
        <div className="nav-links">
          <Link className="nav-button" to="">
            Home
          </Link>
          <Link className="nav-button" to="/products">
            Toys
          </Link>
          <Link className="nav-button" to="/streaming">
            Streaming
          </Link>
          <Link className="nav-button" to="/contact">
            Contact
          </Link>
          <Link className="nav-button" to="/socials">
            Socials
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          ✕
        </button>
        <Link className="drawer-link" to="" onClick={closeMenu}>
          Home
        </Link>
        <Link className="drawer-link" to="/products" onClick={closeMenu}>
          Toys
        </Link>
        <Link className="drawer-link" to="/streaming" onClick={closeMenu}>
          Streaming
        </Link>
        <Link className="drawer-link" to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link className="drawer-link" to="/socials" onClick={closeMenu}>
          Socials
        </Link>
      </div>

      {/* Backdrop when drawer is open */}
      {menuOpen && <div className="drawer-backdrop" onClick={closeMenu} />}
    </>
  );
}
