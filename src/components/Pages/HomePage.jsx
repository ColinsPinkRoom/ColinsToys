import React, { useEffect, useState } from "react";
import "../../style/Home.css";

function HomePage() {
  const [featuredToy, setFeaturedToy] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Flatten all category arrays into one array
        const allItems = Object.values(data).flat();
        const featuredItems = allItems.filter((item) => item.featured);
        setFeaturedToy(featuredItems[0]);
      })
      .catch((err) => {
        console.error("❌ Failed to load featured toy:", err);
      });
  }, []);

  return (
    <div className="home-container">
      <h2 id="homeTitle">Welcome to Colin's Pink Room 💕</h2>
      <hr className="hr-underline" />

      <p className="intro-text">
        Hi sweetie! 💖 This is my little space to share what I love — cute toys,
        custom content, and personal connections. Have a look around and see
        what makes your heart flutter.
      </p>

      <div className="home-buttons">
        <a href="#/products" className="home-btn">
          🎀 Explore Toys
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
      </div>

      {featuredToy ? (
        <div className="featured-toy-card">
          <img
            src={featuredToy.img}
            alt={featuredToy.name}
            className="featured-img"
          />
          <div className="featured-details">
            <h3>{featuredToy.name}</h3>
            <p>{featuredToy.description}</p>
            <p className="featured-price">{featuredToy.price}</p>
            <a
              href={featuredToy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-btn"
            >
              View Toy
            </a>
          </div>
        </div>
      ) : (
        <div id="loadingMessage" className="featured-toy-loading">
          Loading featured toy...
        </div>
      )}

      <p className="soft-note">Made with love. Stay cute, stay curious. 🌸</p>
    </div>
  );
}

export default HomePage;
