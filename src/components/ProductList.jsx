import { useState } from "react";
import { menu } from "../assets/menu/menu"; // Ruta ajustada
import CategoryFilter from "./CategoryFilter"; // Asegúrate de que esta ruta sea correcta
import ProductCard from "./ProductCard"; // Importa el componente ProductCard

export const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === "all"
      ? menu
      : menu.filter((product) => product.category === selectedCategory);

  return (
    <section className="bg-[#fbcfe8] bg-opacity-45 p-8">
      {" "}
      {/* Fondo del SVG aplicado aquí */}
      {/* Filtro de categorías */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* Renderizado de productos */}
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
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
