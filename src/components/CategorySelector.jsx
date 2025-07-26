import "../style/CategorySelector.css";

function CategorySelector({
  categories = [],
  activeCategory,
  onCategoryChange,
  subcategories = [],
  activeSubcategory,
  onSubcategoryChange,
  title = "",
}) {
  return (
    <>
      {/* Category Section */}
      <section className="category-layout">
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => {
                onCategoryChange(category);
                onSubcategoryChange?.(null); // Safe call
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {title && <h4 className="category-title secondaryTitle">{title}</h4>}

      {/* Subcategory Section */}
      {subcategories.length > 0 && (
        <section className="toys-subcategory-section">
          <div className="subcategory-menu">
            <button
              className={`subcategory-tab ${
                activeSubcategory === null ? "active" : ""
              }`}
              onClick={() => onSubcategoryChange(null)}
            >
              All
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                className={`subcategory-tab ${
                  activeSubcategory === sub ? "active" : ""
                }`}
                onClick={() => onSubcategoryChange(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default CategorySelector;
