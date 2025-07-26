import React, { useEffect, useState } from "react";
import "../../style/pages/Home.css";
import Slideshow from "../../components/Slideshow";

import CloudImage from "../CloudImage";

import { scale } from "@cloudinary/url-gen/actions/resize";

function HomePage() {
  const [featuredToys, setFeaturedToys] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allItems = Object.values(data).flat();
        const featuredItems = allItems.filter((item) => item.featured);
        setFeaturedToys(featuredItems.slice(0, 5));
      })
      .catch((err) => {
        console.error("❌ Failed to load featured toys:", err);
      });
  }, []);

  return (
    <main className="home-container container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <h2 className="homeTitle titleText">Welcome to Colin's Pink Room 💕</h2>
        <p className="intro-text">
          Hi sweetie! 💖 This is my little space to share what I love — cute
          toys, custom content, and personal connections.
        </p>
        <nav className="home-buttons">
          <a href="#/about" className="home-btn">
            🎀 Who am I?
          </a>
          <a href="#/prices" className="home-btn">
            💰 See Prices
          </a>
          <a href="#/socials" className="home-btn">
            📸 Follow Me
          </a>
          <a href="#/contact" className="home-btn">
            💌 Contact Me
          </a>
        </nav>
      </section>

      {/* 2. Profile Picture */}
      <section className="profile-image-section">
        <CloudImage
          link="images/home-image"
          alt="Socials"
          nameOfClass="selfie-image"
          widths={300}
          heights={400}
          transform={(img) => img.resize(scale().width(900))}
        />
      </section>

      {/* 3. Featured Toys Slideshow */}
      <section className="profile-featured-section">
        <h3 className="section-title">✨ Featured Items ✨</h3>
        <Slideshow items={featuredToys} />
      </section>
      {/* 4. Footer Note */}
      <footer className="profile-soft-note">
        Made with love. Stay cute, stay curious. 🌸
      </footer>
    </main>
  );
}

export default HomePage;
