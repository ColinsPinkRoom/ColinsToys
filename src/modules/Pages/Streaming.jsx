import React from "react";
import { useEffect, useState } from "react";

import "../../style/Streaming.css";

function Streaming() {
  const [products, setProducts] = useState(null);
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

  return (
    <div id="streamingContainer">
      {categories.map((category) => {
        const items = products[category];
        if (!items || !Array.isArray(items)) {
          console.warn(`No products found for category: ${category}`);
          return null;
        }

        const sortedItems = [...items].sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
          const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
          return priceA - priceB;
        });

        return (
          <div key={category} className="list-group">
            <h4 className="streaming-title">{category}</h4>
            <div className="streamingList">
              {sortedItems.map((item, index) => (
                <div key={index} className="streaming-Item">
                  <p>{item.price}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.price} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Streaming;
