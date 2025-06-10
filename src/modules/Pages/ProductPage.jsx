import { useEffect, useState } from "react";
import "../../style/ProductPage.css";

function ProductPage() {
  const [products, setProducts] = useState(null);
  const [openSections, setOpenSections] = useState({});
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

  const categories = [
    "Dildos",
    "Anal",
    "Vibrators",
    "Fetish",
    "Accessories",
    "Clothes",
    "Extra Products",
    "Lovense",
  ];

  const toggleSection = (category) => {
    setOpenSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

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
    <>
      <div id="dildosContainer" className="visible">
        {categories.map((category) => {
          const items = products[category];
          if (!items || !Array.isArray(items)) {
            console.warn(`⚠️ No products found for category: ${category}`);
            return null;
          }

          const sortedItems = [...items].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
            const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
            return priceA - priceB;
          });

          const isOpen = openSections[category];

          return (
            <div key={category} className="list-group">
              <h4
                style={{ cursor: "pointer" }}
                onClick={() => toggleSection(category)}
              >
                {category}
              </h4>
              <div
                className={`dildosList ${isOpen ? "opening scrollable" : ""}`}
              >
                {sortedItems.map((item, index) => (
                  <div key={index} className="dildo-Item">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <p>{item.price}</p>
                      <img
                        src={item.img}
                        width={100}
                        height={100}
                        alt={item.price}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Deals Section */}
        {Array.isArray(products.deals) && (
          <>
            <h4>DEALS</h4>
            <div id="dealList">
              {products.deals.map((deal, index) => (
                <div key={index} className="deal-Item">
                  <a href={deal.link} target="_blank" rel="noreferrer">
                    <h4>{deal.text}</h4>
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProductPage;
