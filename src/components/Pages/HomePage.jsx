import React, { useEffect, useState } from "react";
import "../../style/Home.css";

function HomePage() {
  const [featuredToys, setFeaturedToys] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);

  // Touch tracking for swipe
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const swipeThreshold = 50;

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

  const handlePrev = () => {
    setSlideRight(false);
    setSlideLeft(false);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? featuredToys.length - 1 : prev - 1
      );
      setSlideLeft(true);
    }, 10);
  };

  const handleNext = () => {
    setSlideRight(false);
    setSlideLeft(false);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === featuredToys.length - 1 ? 0 : prev + 1
      );
      setSlideRight(true);
    }, 10);
  };

  const handlePointerDown = (e) => {
    setDragStartX(e.clientX || e.touches?.[0].clientX);
  };

  // Touch gesture handlers
  const handlePointerMove = (e) => {
    if (dragStartX !== null) {
      const currentX = e.clientX || e.touches?.[0].clientX;
      setDragOffsetX(currentX - dragStartX);
    }
  };

  const handlePointerUp = () => {
    if (dragOffsetX > swipeThreshold) {
      handlePrev();
    } else if (dragOffsetX < -swipeThreshold) {
      handleNext();
    }
    setDragStartX(null);
    setDragOffsetX(0);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) {
      handleNext(); // Swipe left
    } else if (distance < -50) {
      handlePrev(); // Swipe right
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <h2 id="homeTitle">Welcome to Colin's Pink Room 💕</h2>
        <hr className="hr-underline" />
        <p className="intro-text">
          Hi sweetie! 💖 This is my little space to share what I love — cute
          toys, custom content, and personal connections. Have a look around and
          see what makes your heart flutter.
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
      </section>

      {/* 2. Profile Picture */}
      <section className="profile-image-section">
        <img
          src={`${import.meta.env.BASE_URL}/images/home-image.jpg`}
          alt="Colin"
          className="selfie-image"
          loading="lazy"
        />
      </section>

      {/* 3. Featured Toys Slideshow */}
      <section className="profile-featured-section">
        <h3 className="section-title">✨ Featured Toys ✨</h3>
        {featuredToys.length > 0 ? (
          <div className="slideshow-container">
            <button className="slide-btn prev" onClick={handlePrev}>
              ◀
            </button>

            <div
              className={`featured-toy-card ${
                slideRight ? "slide-right" : ""
              } ${slideLeft ? "slide-left" : ""} ${
                dragStartX !== null ? "swiping dragging" : ""
              }`}
              style={{
                transform: `translateX(${dragOffsetX}px)`,
                opacity: 1 - Math.min(Math.abs(dragOffsetX) / 150, 0.6),
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUp}
            >
              <img
                src={featuredToys[currentSlide].img}
                alt={featuredToys[currentSlide].name}
                className="featured-img"
                loading="lazy"
              />
              <div className="featured-details">
                <h3>{featuredToys[currentSlide].name}</h3>
                <p>{featuredToys[currentSlide].description}</p>
              </div>
            </div>

            <button className="slide-btn next" onClick={handleNext}>
              ▶
            </button>
          </div>
        ) : (
          <div className="featured-toy-loading">Loading featured toys...</div>
        )}
        <div className="carousel-dots">
          {featuredToys.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </section>

      {/* 4. Footer Note */}
      <footer className="profile-soft-note">
        Made with love. Stay cute, stay curious. 🌸
      </footer>
    </div>
  );
}

export default HomePage;
