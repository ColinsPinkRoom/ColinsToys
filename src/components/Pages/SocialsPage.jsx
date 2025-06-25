import React from "react";
import "../../style/Socials.css";

function SocialsPage() {
  return (
    <div className="socials-container">
      {/* 1. Links Section */}
      <section className="socials-link-section">
        <div className="socials-groups">
          <div className="socials-card">
            <h2 className="socials-title">Social Media</h2>
            <a
              href="https://twitter.com/colinspinkroom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/twitter.svg`}
                alt="Twitter"
              />
              Twitter
            </a>
            <a
              href="https://bsky.app/profile/colinspinkroom.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/bluesky.svg`}
                alt="Bluesky"
              />
              Bluesky
            </a>
            <a
              href="https://xhamster.com/users/profiles/colins_pink_room"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/xhamster.svg`}
                alt="Xhamster"
              />
              XHamster
            </a>
          </div>

          <div className="socials-card">
            <h2 className="socials-title">Premium Content</h2>
            <a
              href="https://onlyfans.com/colins_pink_room"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/onlyfans.svg`}
                alt="OnlyFans"
              />
              OnlyFans
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
              Fansly
            </a>
          </div>

          <div className="socials-card">
            <h2 className="socials-title">Stream Websites</h2>
            <a
              href="https://stripchat.com/Colins_Pink_Room/follow-me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/stripchat.svg`}
                alt="Stripchat"
              />
              Stripchat
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
              Chaturbate
            </a>
          </div>
        </div>
      </section>

      {/* 2. Profile Picture */}
      <section className="socials-image-section">
        <img
          src={`${import.meta.env.BASE_URL}/images/socials-image.jpg`}
          width={300}
          alt="Socials"
          className="socials-image"
          loading="lazy"
        />
        <p className="socials-image-text">
          I hope that you will enjoy your stay~
        </p>
      </section>
    </div>
  );
}

export default SocialsPage;
