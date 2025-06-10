import { Routes, Route } from "react-router-dom";
import ProductPage from "./modules/Pages/ProductPage.jsx";
import Navigation from "./modules/Navigation.jsx";
import Streaming from "./modules/Pages/Streaming.jsx";
import Contact from "./modules/Pages/Contact.jsx";
import Socials from "./modules/Pages/Socials.jsx";
import Home from "./modules/Pages/Home.jsx";

import "./style/App.css";

function App() {
  return (
    <div id="App">
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
