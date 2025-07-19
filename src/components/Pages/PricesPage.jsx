import React, { useEffect, useState } from "react";
import "../../style/pages/Prices.css";

function PricesPage() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch(import.meta.env.BASE_URL + "data/prices.jsonss") //Creating an error for testing
    fetch(import.meta.env.BASE_URL + "data/prices.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("❌ Failed to load product data:", err);
        setError("⚠️ Oops! Could not load products. Try refreshing the page.");
      });
  }, []);

  if (error) {
    return (
      <div className="prices-container container">
        <div id="loadingMessage" style={{ color: "red" }}>
          {error}
        </div>
      </div>
    );
  }

  if (!products) {
    return (
      <div className="prices-container container">
        <div className="image-loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="prices-container container">
      <h2 className="prices-title titleText">Prices</h2>

      {/* 1. Grid Section */}
      <section className="prices-grid-section">
        {Object.entries(products).map(([category, items], index) => (
          <div
            className={`prices-category grid-area-${index}`}
            key={category}
            style={{ gridArea: `area${index}` }}
          >
            <h3 className="prices-category-title">{category}</h3>
            {items.map((item, itemIndex) => (
              <div className="prices-box" key={itemIndex}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* 2. Payment Note Section */}
      <div className="prices-payment-note">
        <h3>Payment method</h3>
        <p>
          <strong>Throne, Wise, Zen, PayPal</strong>
        </p>
      </div>

      {/* 3. TTS Section */}
      <div className="prices-tts-message">
        <h3>Terms of Service</h3>
        <p>
          All content provided is for personal, private use only.
          Redistribution, sharing, or resale of any content is strictly
          prohibited.
        </p>
        <p>
          By purchasing custom content or communication services (including
          photos, videos, texting, video calls, etc.), you agree that all
          interactions are consensual, digital in nature, and non-refundable.
        </p>
        <p>
          Any inappropriate behavior, harassment, or attempts to violate
          boundaries will result in a permanent ban from future interactions.
        </p>
        <p>
          You must be 18 years or older to interact with this site or purchase
          any content or services.
        </p>
        <p>
          I reserve the right to refuse any requests or refund at my discretion
          if terms are violated or behavior is abusive.
        </p>
      </div>
    </div>
  );
}

export default PricesPage;
