import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import NavigationMobile from "./components/NavigationMobile.jsx";

import Navigation from "./components/Navigation.jsx";
import HomePage from "./components/Pages/HomePage.jsx";
import ToysPage from "./components/Pages/ToysPage.jsx";
import ContactPage from "./components/Pages/ContactPage.jsx";
import LinksPage from "./components/Pages/LinksPage.jsx";
import SocialsPage from "./components/Pages/SocialsPage.jsx";
import PricesPage from "./components/Pages/PricesPage.jsx";
import NotFoundPage from "./components/Pages/NotFoundPage.jsx";
import GalleryPage from "./components/Pages/GalleryPage.jsx";
import AboutPage from "./components/Pages/AboutPage.jsx";
import UpdatesPage from "./components/Pages/UpdatesPage.jsx";

import "./style/App.css";

function App() {
  return (
    <>
      <div id="background-overlay"></div>
      <NavigationMobile />
      <div id="App">
        <Link className="logo-container" to="">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}/logos/Logo-website.svg`}
              alt="Logo"
              loading="lazy"
            />
          </div>
        </Link>

        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ToysPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/socials" element={<SocialsPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer id="footer">
          <p>
            &copy; 2025 Colins Pink Room. All rights reserved. Power to the
            Booty
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
