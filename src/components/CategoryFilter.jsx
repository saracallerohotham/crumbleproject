import { menu } from "../assets/menu/menu";
import PropTypes from "prop-types";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  // Filtra categorías únicas y elimina valores undefined
  const categories = [
    "all",
    ...new Set(
      menu.map((product) => product.category).filter((category) => category)
    ),
  ];

  console.log(categories); // Verifica las categorías aquí

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 m-2 rounded ${
            selectedCategory === category
              ? "bg-pink-400 text-white"
              : " text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
