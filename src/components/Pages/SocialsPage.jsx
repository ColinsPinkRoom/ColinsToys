import React from "react";
import "../../style/Socials.css"; // Import your CSS file for styling

function SocialsPage() {
  return (
    <div className="socials-container">
      {/* 1. Links Section */}
      <section className="socials-link-section">
        <h2 className="socials-title">Follow Me</h2>
        <div className="socials-links">
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
      </section>
    </div>
  );
}

export default SocialsPage;
