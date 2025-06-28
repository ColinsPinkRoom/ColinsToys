// components/FeaturedSlideshow.jsx
import React, { useState } from "react";
// import "../style/FeaturedSlideshow.css";

function SlideShow({ items = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const swipeThreshold = 50;

  const handlePrev = () => {
    setSlideRight(false);
    setSlideLeft(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setSlideLeft(true);
    }, 10);
  };

  const handleNext = () => {
    setSlideRight(false);
    setSlideLeft(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setSlideRight(true);
    }, 10);
  };

  const handlePointerDown = (e) => {
    setDragStartX(e.clientX || e.touches?.[0].clientX);
  };

  const handlePointerMove = (e) => {
    if (dragStartX !== null) {
      const currentX = e.clientX || e.touches?.[0].clientX;
      setDragOffsetX(currentX - dragStartX);
    }
  };

  const handlePointerUp = () => {
    if (dragOffsetX > swipeThreshold) handlePrev();
    else if (dragOffsetX < -swipeThreshold) handleNext();

    setDragStartX(null);
    setDragOffsetX(0);
  };

  if (!items.length) {
    return (
      <div className="featured-toy-loading">Loading featured items...</div>
    );
  }

  return (
    <section className="profile-featured-section">
      <h3 className="section-title">✨ Featured Items ✨</h3>
      <div className="slideshow-container">
        <img
          src={`${import.meta.env.BASE_URL}/icons/next-button.svg`}
          alt="Previous"
          onClick={handlePrev}
          className="slide-btn prev"
        />

        <div
          className={`featured-toy-card ${slideRight ? "slide-right" : ""} ${
            slideLeft ? "slide-left" : ""
          } ${dragStartX !== null ? "swiping dragging" : ""}`}
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
            src={items[currentSlide].img}
            alt={items[currentSlide].name}
            className="featured-img"
            loading="lazy"
          />
          <div className="featured-details">
            <h3>{items[currentSlide].name}</h3>
            <p>{items[currentSlide].description}</p>
          </div>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}/icons/next-button.svg`}
          alt="Next"
          onClick={handleNext}
          className="slide-btn next"
        />
      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default SlideShow;
