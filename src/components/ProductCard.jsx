import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context"; // Asegúrate de que la ruta sea correcta

function ProductCard({ imageSrc, title, description, price }) {
  const { addToCart } = useContext(CartContext); // Obtener la función addToCart

  const handleAddToCart = () => {
    const product = {
      id: new Date().getTime(), // Generar un ID único temporalmente
      imageSrc,
      title,
      description,
      price,
    };
    addToCart(product);
  };

  return (
    <div className="relative w-full h-64 group">
      {/* Imagen con bordes redondeados */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-lg transition-all duration-300"
      />

      {/* Contenido que aparece al hacer hover */}
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center p-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-sm mb-2">{description}</p>
        <span className="block text-lg font-bold mb-4">{price}</span>

        {/* Botón */}
        <button
          onClick={handleAddToCart} // Llama a handleAddToCart al hacer clic
          className="px-8 py-3 bg-transparent text-white font-bold rounded-full hover:bg-transparent hover:border-white"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
};
