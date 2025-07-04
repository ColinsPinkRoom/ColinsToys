import React from "react";
import "../../style/Socials.css";

import CloudImage from "../CloudImage";

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
        </div>
      </section>

      {/* 2. Profile Picture */}
      <section className="socials-image-section">
        <CloudImage
          link="images/socials-image"
          alt="Socials"
          nameOfClass="socials-image"
          widths={300}
          heights={400}
        />
        <p className="socials-image-text">
          I hope that you will enjoy your stay~
        </p>
      </section>
    </div>
  );
}

export default SocialsPage;
