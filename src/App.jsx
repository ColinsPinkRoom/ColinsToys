import { Routes, Route } from "react-router-dom";
import ProductPage from "./modules/Pages/ProductPage.jsx";
import Navigation from "./modules/Navigation.jsx";
import Streaming from "./modules/Pages/Streaming.jsx";
import Contact from "./modules/Pages/Contact.jsx";
import Socials from "./modules/Pages/Socials.jsx";
import Home from "./modules/Pages/Home.jsx";

function App() {
  return (
    <div id="App">
      <h2 id="mainTitle">Toys for Colin</h2>

      <p className="intro-text">
        Welcome to "Toys for Colin"! This is a curated list of toys and products
        that I think Colin would enjoy. The list is updated regularly, so check
        back often for new additions. If you have any suggestions or want to add
        something, feel free to let me know!
      </p>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
      <footer id="footer">
        <p>
          &copy; 2025 Dildos for Colin. All rights reserved. Power to the Booty
        </p>
      </footer>
    </div>
  );
}

export default App;
