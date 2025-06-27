import React from "react";
import "../../style/Links.css";

function LinksPage() {
  return (
    <div className="links-container">
      {/* 1. Links Section */}
      <section className="links-link-section">
        <div className="links-groups">
          <div className="links-card">
            <h2 className="links-title">Purchase Content</h2>
            <a
              href="https://onlyfans.com/colins_pink_room"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/icons/onlyfans.svg`}
                alt="OnlyFans"
              />
              Link 1
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
              Link 2
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LinksPage;
