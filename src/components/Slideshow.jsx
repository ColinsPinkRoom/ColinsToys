import React, { useState, useEffect, useRef } from "react";
import "../style/Slideshow.css";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dqduer2pc",
  },
});

function SlideShow({ items = [], gallery }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const swipeThreshold = 50;

  useEffect(() => {
    if (currentSlide >= items.length) {
      setCurrentSlide(0);
    }
  }, [items, currentSlide]);

  useEffect(() => {
    if (!gallery || !items[currentSlide]?.img) {
      setImageLoaded(true);
      return;
    }

    setImageLoaded(false);

    const preloadImg = new window.Image();
    const preloadCldImg = cld
      .image(items[currentSlide].img)
      .resize(scale().width(900))
      .delivery(format("auto"))
      .delivery(quality("auto"));

    preloadImg.src = preloadCldImg.toURL();
    preloadImg.onload = () => setImageLoaded(true);
  }, [currentSlide, items, gallery]);

  const handlePrev = () => {
    if (items.length === 0) return;
    setSlideRight(false);
    setSlideLeft(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setSlideLeft(true);
    }, 10);
  };

  const handleNext = () => {
    if (items.length === 0) return;
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

  if (!Array.isArray(items) || items.length === 0) {
    return <div className="featured-toy-loading">No items to show.</div>;
  }

  const current = items[currentSlide];
  if (!current || !current.img) {
    return <div className="featured-toy-loading">Invalid slide data.</div>;
  }

  const cldImg = cld.image(current.img);

  cldImg
    .resize(scale().width(900))
    .delivery(format("auto"))
    .delivery(quality("auto"));

  return (
    <div className="slideshow-container">
      <img
        src={`${import.meta.env.BASE_URL}/icons/next-button.svg`}
        alt="Previous"
        onClick={handlePrev}
        className="slide-btn prev"
        loading="lazy"
      />

      <div
        className={`slideshow-card ${slideRight ? "slide-right" : ""} ${
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
        <div className="image-wrapper" ref={imageRef}>
          {!imageLoaded && gallery && (
            <div className="image-loading">
              <div className="spinner"></div>
            </div>
          )}

          {imageLoaded && gallery && (
            <AdvancedImage
              cldImg={cldImg}
              className="slideshow-img"
              style={{
                opacity: 1,
                transition: "opacity 0.4s ease-in-out",
              }}
            />
          )}

          {!gallery && (
            <img
              src={current.img}
              alt={current.name || "Gallery image"}
              className="slideshow-img"
              loading="lazy"
            />
          )}
        </div>

        {(current.name || current.description) && (
          <div className="slideshow-details">
            {current.name && <h3>{current.name}</h3>}
            {current.description && <p>{current.description}</p>}
          </div>
        )}
      </div>

      <img
        src={`${import.meta.env.BASE_URL}/icons/next-button.svg`}
        alt="Next"
        onClick={handleNext}
        className="slide-btn next"
        loading="lazy"
      />

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
