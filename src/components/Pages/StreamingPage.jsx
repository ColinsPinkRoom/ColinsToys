import React from "react";
import { useEffect, useState } from "react";

import "../../style/Streaming.css";

function StreamingPage() {
  const [products, setProducts] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Camera");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/streaming.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Failed to load streaming data", err);
        setError("Could not load streaming products. Try refreshing the page");
      });
  }, []);

  const categories = ["Camera", "Lights"];

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

  const activeItems = products[activeCategory] || [];

  const sortedItems = [...activeItems].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
    const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
    return priceA - priceB;
  });

  return (
    <>
      <div id="streamingContainer" className="visible">
        <div className="category-layout">
          <div className="category-menu">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <h4 className="category-title">{activeCategory}</h4>
          <div className="streamingList opening scrollable">
            {sortedItems.map((item, index) => (
              <div key={index} className="streaming-Item">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <p>{item.price}</p>
                  <img src={item.img} alt={item.price} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StreamingPage;
