import React, { useEffect, useState } from "react";
import "../../style/Prices.css";

function PricesPage() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      <div id="loadingMessage" style={{ color: "red" }}>
        {error}
      </div>
    );
  }

  if (!products) {
    return <div id="loadingMessage">Loading products...</div>;
  }

  return (
    <div className="prices-container">
      <h2 className="prices-title">Prices</h2>
      <div className="prices-grid">
        {Object.entries(products).map(([category, items], index) => (
          <div
            className={`prices-category grid-area-${index}`}
            key={category}
            style={{ gridArea: `area${index}` }}
          >
            <h3 className="category-title">{category}</h3>
            {items.map((item, itemIndex) => (
              <div className="prices-box" key={itemIndex}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="payment-note">
        <h3>Payment method</h3>
        <p>
          <strong>Throne, Wise, Zen, PayPal</strong>
        </p>
      </div>
    </div>
  );
}

export default PricesPage;
