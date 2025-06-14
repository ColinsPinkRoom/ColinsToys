import { Link } from "react-router-dom";
import "../style/Navigation.css"; // Ensure you have a CSS file for styling

export default function Navigation() {
  return (
    <nav className="nav-bar">
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
    </nav>
  );
}
