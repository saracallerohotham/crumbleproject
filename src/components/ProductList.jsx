import { useState } from "react";
import { menu } from "../assets/menu/menu";
import CategoryFilter from "./CategoryFilter";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? menu
      : menu.filter((product) => product.category === selectedCategory);

  return (
    <section className="bg-[#fbcfe8] bg-opacity-45 p-8">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id} // Pasamos el id aquí
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
