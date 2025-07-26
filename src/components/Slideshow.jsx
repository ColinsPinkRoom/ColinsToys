import React, { useState, useEffect, useRef } from "react";
import "../style/Slideshow.css";

import { cld } from "../utils/cloudinary";

import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

function SlideShow({ items = [], gallery }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const swipeThreshold = 50;

  // Ensure currentSlide stays in bounds when items change
  useEffect(() => {
    if (items.length === 0) {
      setCurrentSlide(0);
    } else if (currentSlide >= items.length) {
      setCurrentSlide(items.length - 1);
    }
  }, [items]);

  // Preload Cloudinary image if gallery is true
  useEffect(() => {
    if (!gallery || !items[currentSlide]?.img) {
      setImageLoaded(true);
      return;
    }

    setImageLoaded(false);

    const preload = new window.Image();
    const cldImg = cld
      .image(items[currentSlide].img)
      .resize(scale().width(900))
      .delivery(format("auto"))
      .delivery(quality("auto"));

    preload.src = cldImg.toURL();
    preload.onload = () => setImageLoaded(true);
  }, [currentSlide, items, gallery]);

  const handlePrev = () => {
    if (items.length === 0) return;
    setSlideRight(false);
    setSlideLeft(false);
    requestAnimationFrame(() => {
      setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setSlideLeft(true);
    });
  };

  const handleNext = () => {
    if (items.length === 0) return;
    setSlideRight(false);
    setSlideLeft(false);
    requestAnimationFrame(() => {
      setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setSlideRight(true);
    });
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

  // Only rebuild cldImg if gallery is true
  const cldImg = gallery
    ? cld
        .image(current.img)
        .resize(scale().width(900))
        .delivery(format("auto"))
        .delivery(quality("auto"))
    : null;

  return (
    <div className="slideshow-container">
      <img
        src={`${import.meta.env.BASE_URL}/icons/next-button.svg`}
        alt="Previous"
        onClick={handlePrev}
        className="slide-btn prev"
        loading="eager"
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
          {gallery && cldImg && (
            <AdvancedImage
              cldImg={cldImg}
              className={`slideshow-img ${imageLoaded ? "loaded" : ""}`}
              onLoad={() => setImageLoaded(true)}
            />
          )}

          {!gallery && (
            <img
              src={current.img}
              alt={current.name || "Gallery image"}
              className={`slideshow-img ${imageLoaded ? "loaded" : ""}`}
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
        loading="eager"
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
