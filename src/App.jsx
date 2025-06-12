import { Routes, Route } from "react-router-dom";
import Navigation from "./modules/Navigation.jsx";
import HomePage from "./modules/Pages/HomePage.jsx";
import ToysPage from "./modules/Pages/ToysPage.jsx";
import StreamingPage from "./modules/Pages/StreamingPage.jsx";
import ContactPage from "./modules/Pages/ContactPage.jsx";
import SocialsPage from "./modules/Pages/SocialsPage.jsx";

import "./style/App.css";

function App() {
  return (
    <div id="App">
      <h2 id="mainTitle">Colins Pink Room</h2>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ToysPage />} />
        <Route path="/streaming" element={<StreamingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/socials" element={<SocialsPage />} />
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
