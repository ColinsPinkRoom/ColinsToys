import React, { useState, useEffect, useRef } from "react";
import "../style/Slideshow.css";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dqduer2pc", // ✅ Use your own Cloudinary cloud name
  },
});

function SlideShow({ items = [] }) {
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
    setImageLoaded(false);
    const imgEl = imageRef.current?.getElementsByTagName("img")[0];
    if (imgEl) {
      imgEl.onload = () => setImageLoaded(true);
    }
  }, [currentSlide]);

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
          {!imageLoaded && (
            <div className="image-loading">
              <div className="spinner"></div>
            </div>
          )}
          <AdvancedImage
            cldImg={cldImg}
            className="slideshow-img"
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
            }}
          />
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
