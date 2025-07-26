import React, { useEffect, useState } from "react";
import SlideShow from "../Slideshow";
import CategorySelector from "../CategorySelector";
import "../../style/pages/Gallery.css";

function GalleryPage() {
  const [galleryData, setGalleryData] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
        const firstCategory = Object.keys(data)[0];
        setActiveCategory(firstCategory);
      })
      .catch((err) => {
        console.error("❌ Failed to load gallery data:", err);
        setError("⚠️ Could not load gallery. Please try again later.");
      });
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!galleryData || !activeCategory) {
    return (
      <div className="gallery-page-container container">
        <div className="spinner"></div>
      </div>
    );
  }

  const categories = Object.keys(galleryData);
  const activeItems = galleryData[activeCategory] || [];

  const subcategories = Array.from(
    new Set(activeItems.map((item) => item.sub).filter(Boolean))
  );

  const filteredItems = activeSubcategory
    ? activeItems.filter((item) => item.sub === activeSubcategory)
    : activeItems;

  return (
    <div className="gallery-page-container container">
      <h2 className="titleText gallery-title">My Favorite Looks 💖</h2>

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

      <SlideShow items={filteredItems} gallery={true} />
    </div>
  );
}

export default GalleryPage;
