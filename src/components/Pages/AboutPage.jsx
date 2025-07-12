import React from "react";
import CloudImage from "../CloudImage";
import { scale } from "@cloudinary/url-gen/actions/resize";
import "../../style/pages/About.css";

function AboutPage() {
  return (
    <main className="about-container container">
      <section className="about-section">
        <h2 className="about-title">About Colin's Pink Room 💖</h2>
        <p>
          Welcome to my little corner of the internet! I'm Colin, and this is my
          personal space where I share my love for cute toys, custom content,
          and all things pink. Here, you'll find a collection of my favorite
          toys, custom creations, and a glimpse into my life. I believe in
          creating a warm, welcoming environment where everyone can feel at
          home.
        </p>
        <p>
          Whether you're here to explore my toy collection, check out my custom
          content, or just say hi, I hope you find something that brings a smile
          to your face. Thank you for visiting Colin's Pink Room! 💕
        </p>
      </section>
      <div className="section-separator"></div>

      <section className="about-image-section">
        <CloudImage
          link="images/home-image"
          alt="Colin looking cute"
          nameOfClass="selfie-image"
          widths={300}
          heights={400}
          transform={(img) => img.resize(scale().width(900))}
        />
      </section>
    </main>
  );
}

export default AboutPage;
