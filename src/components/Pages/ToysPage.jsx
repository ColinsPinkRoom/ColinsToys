import { useEffect, useState } from "react";
import "../../style/pages/Toys.css";

import CategorySelector from "../CategorySelector";

function ToysPage() {
  const [products, setProducts] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Dildos");
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch(import.meta.env.BASE_URL + "data/products.jsonss") //Creating an error for testing
    fetch(import.meta.env.BASE_URL + "data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("❌ Failed to load product data:", err);
        setError("⚠️ Oops! Could not load products. Try refreshing the page.");
      });
  }, []);

  if (error) {
    return (
      <div className="toys-container container">
        <div id="loadingMessage" style={{ color: "red" }}>
          {error}
        </div>
      </div>
    );
  }

  if (!products) {
    return (
      <div className="toys-container container">
        <div className="image-loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  // Get categories in object key order'
  const categories = Object.keys(products).filter((key) => key !== "deals");

  const activeItems = products[activeCategory] || [];

  // Get unique subcategories for the current category
  const subcategories = Array.from(
    new Set(activeItems.map((item) => item.sub).filter(Boolean))
  );

  // Filter by subcategory if one is selected
  const filteredItems = activeSubcategory
    ? activeItems.filter((item) => item.sub === activeSubcategory)
    : activeItems;

  // Sort items by price
  const sortedItems = [...filteredItems].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
    const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
    return priceA - priceB;
  });

  return (
    <>
      <div className="toys-container container">
        {/* 1. Category Section */}
        <CategorySelector
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setActiveSubcategory(null); // Reset subcategory on category change
          }}
          subcategories={subcategories}
          activeSubcategory={activeSubcategory}
          onSubcategoryChange={setActiveSubcategory}
          title={activeCategory}
        />

        {/* 2. Toys Section */}
        <section className="toys-list-section">
          {sortedItems.map((item, index) => (
            <div key={index} className="toys-item">
              <a href={item.link} target="_blank" rel="noreferrer">
                <p>{item.price}</p>
                <img
                  src={item.img}
                  width={100}
                  height={100}
                  alt={item.price}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default ToysPage;
