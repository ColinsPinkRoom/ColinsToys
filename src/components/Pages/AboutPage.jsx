import React from "react";
import { useNavigate } from "react-router-dom";
import CloudImage from "../CloudImage";
import { scale } from "@cloudinary/url-gen/actions/resize";
import "../../style/pages/About.css";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <main className="about-container container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg
          className="back-button-icon"
          viewBox="0 0 100 80"
          width="28"
          height="28"
          fill="none"
          stroke="#6b2b4d"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <line x1="70" y1="20" x2="30" y2="40" />
          <line x1="30" y1="40" x2="70" y2="60" />
        </svg>
      </button>

      <section className="about-section">
        <h2 className="about-title">About Colin's Pink Room 💖</h2>
        <p>
          Welcome to my little corner of the internet! I'm Colin, and this is my
          personal space where I share my love for cute toys, custom content,
          and all things pink...
        </p>
        <p>
          Whether you're here to explore my toy collection, check out my custom
          content, or just say hi, I hope you find something that brings a smile
          to your face. Thank you for visiting Colin's Pink Room! 💕
        </p>
      </section>
    </main>
  );
}

export default AboutPage;
