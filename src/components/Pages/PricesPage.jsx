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
      <div className="prices-links">
        {Object.entries(products).map(([category, items]) => (
          <div className="prices-section" key={category}>
            <h3 className="category-title">{category}</h3>
            {items.map((item, index) => (
              <div className="prices-box" key={index}>
                <h4 className="item-name">{item.name}</h4>
                <h4 className="item-price">${item.price}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricesPage;
