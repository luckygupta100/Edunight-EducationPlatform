function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter courses by category">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            className={`category-chip${isActive ? " category-chip--active" : ""}`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
