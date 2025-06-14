import React from "react";
import "../../style/Socials.css"; // Import your CSS file for styling

function SocialsPage() {
  return (
    <div className="socials-container">
      <div className="socials-link-container">
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
      </div>
      <div className="socials-image-container">
        <img
          src={`${import.meta.env.BASE_URL}/images/socials-image.jpg`}
          width={300}
          alt="Socials"
          className="socials-image"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default SocialsPage;
