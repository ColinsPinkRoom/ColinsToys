import { useEffect, useState } from "react";
import "../../style/Toys.css";

function ToysPage() {
  const [products, setProducts] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Dildos");
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      <div id="loadingMessage" style={{ color: "red" }}>
        {error}
      </div>
    );
  }

  if (!products) {
    return <div id="loadingMessage">Loading products...</div>;
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
      <div className="toys-container">
        {/* 1. Category Section */}
        <section className="category-layout">
          <div className="category-menu">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveSubcategory(null); // Reset subcategory when changing main category
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        <h4 className="category-title">{activeCategory}</h4>

        {/* 2. Sub Category Section */}
        {subcategories.length > 0 && (
          <section className="toys-subcategory-section">
            <div className="subcategory-menu">
              <button
                className={`subcategory-tab ${
                  activeSubcategory === null ? "active" : ""
                }`}
                onClick={() => setActiveSubcategory(null)}
              >
                All
              </button>
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  className={`subcategory-tab ${
                    activeSubcategory === sub ? "active" : ""
                  }`}
                  onClick={() => setActiveSubcategory(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* 3. Toys Section */}
        <section className="toys-list-section">
          {sortedItems.map((item, index) => (
            <div key={index} className="toys-item">
              <a href={item.link} target="_blank" rel="noreferrer">
                <p>{item.price}</p>
                <img src={item.img} width={100} height={100} alt={item.price} />
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default ToysPage;
