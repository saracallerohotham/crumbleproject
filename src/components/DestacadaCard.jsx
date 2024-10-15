import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context";

export function DestacadaCard({
  imageSrc,
  title,
  description,
  price,
  reverse,
}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id: Date.now(), imageSrc, title, description, price };
    addToCart(product);
  };

  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center hover:bg-blue-200 w-full max-w-4xl rounded-3xl bg-white text-black transition-colors duration-300`}
    >
      {/* img*/}
      <img src={imageSrc} alt={title} className="w-48 h-48 object-cover" />

      {/* contenido */}
      <div className="p-4 w-full flex-1 min-h-[250px]">
        {/* titulo */}
        <h2 className="text-xl tracking-wide font-extrabold mb-2">{title}</h2>

        {/* descripcion */}
        <p className="mt-3">{description}</p>

        {/* precio */}
        {price && <p className="text-lg font-semibold mb-4">{price}</p>}

        {/* agregar al carrito */}
        <button
          onClick={handleAddToCart}
          className="inline-block text-center text-black font-semibold py-2 px-4 rounded-full transition-transform transform hover:translate-x-4 duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

DestacadaCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  reverse: PropTypes.bool,
};
