import React from "react";
import "../../style/Links.css";

function LinksPage() {
  return (
    <div className="links-container">
      <div className="hero-image-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}/images/banner.jpg`}
          alt="Welcome to Colin's Pink Room"
          className="hero-image"
          loading="lazy"
        />
      </div>

      <section className="links-section">
        <div className="links-grid">
          <div className="link-card" style={{ gridArea: `area0` }}>
            <h2 className="link-title">Order the content of your dreams 💭</h2>
            <a
              href="https://iwantclips.com/store/1452122/ColinsPinkRoom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/iwantclips.svg`}
                alt="IWantClips"
              />
              Custom via IWantClips
            </a>
          </div>

          <div className="link-card" style={{ gridArea: `area1` }}>
            <h2 className="link-title">See Premium Content ✨</h2>
            <a
              href="https://onlyfans.com/colins_pink_room"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/onlyfans.svg`}
                alt="OnlyFans"
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
              />
              View on Fansly
            </a>
          </div>

          <div className="link-card" style={{ gridArea: `area2` }}>
            <h2 className="link-title">Catch Me Live 🎥</h2>
            <a
              href="https://stripchat.com/Colins_Pink_Room/follow-me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/stripchat.svg`}
                alt="Stripchat"
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
