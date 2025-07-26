import React, { useState } from "react";
import "../../style/pages/Links.css";

function LinksPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="links-container container">
      {/* Hero Image Banner */}

      <div className="hero-image-wrapper">
        {/* Blur placeholder image */}
        <img
          src={`${import.meta.env.BASE_URL}/images/banner-blur.jpg`}
          alt=""
          className="hero-image placeholder"
          aria-hidden="true"
          style={{ opacity: isLoaded ? 0 : 1 }}
        />

        {/* Full image */}
        <img
          src={`${import.meta.env.BASE_URL}/images/banner.jpg`}
          alt="Colin's Pink Room Banner"
          className="hero-image full"
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      </div>

      {/* Page Title */}
      <h2 className="links-title titleText">My Links</h2>

      {/* Link Cards Grid */}
      <section className="links-grid-section">
        <div className="links-grid">
          {/* Custom Content */}
          <div className="link-card" style={{ gridArea: "area0" }}>
            <h3 className="link-card-title">
              Order the content of your dreams 💭
            </h3>
            <a
              href="https://iwantclips.com/store/1452122/ColinsPinkRoom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/iwantclips.svg`}
                alt="IWantClips"
                loading="eager"
              />
              Custom via IWantClips
            </a>
          </div>

          {/* Premium Content */}
          <div className="link-card" style={{ gridArea: "area1" }}>
            <h3 className="link-card-title">See Premium Content ✨</h3>
            <a
              href="https://onlyfans.com/colins_pink_room"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/onlyfans.svg`}
                alt="OnlyFans"
                loading="eager"
              />
              View on OnlyFans
            </a>
            <a
              href="https://fansly.com/Colins_Pink_Room/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/fansly.svg`}
                alt="Fansly"
                loading="eager"
              />
              View on Fansly
            </a>
          </div>

          {/* Live Streams */}
          <div className="link-card" style={{ gridArea: "area2" }}>
            <h3 className="link-card-title">Catch Me Live 🎥</h3>
            <a
              href="https://stripchat.com/Colins_Pink_Room/follow-me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/stripchat.svg`}
                alt="Stripchat"
                loading="eager"
              />
              Watch on Stripchat
            </a>
            <a
              href="https://chaturbate.com/in/?tour=7Bge&campaign=qqqVF&track=default&room=colinspinkroom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/chaturbate.svg`}
                alt="Chaturbate"
                loading="eager"
              />
              Watch on Chaturbate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LinksPage;
