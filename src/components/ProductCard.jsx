import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context";
import { Notification } from "./Notification";

export const ProductCard = ({ id, imageSrc, title, description, price }) => {
  const [, setCart] = useContext(CartContext);
  const [notification, setNotification] = useState("");

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { id, title, quantity: 1, price }];
      }
    });

    // actualizar noti
    setNotification(`${title} added to cart!`);
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  const removeItem = () => {
    setCart((currItems) => {
      const currentItem = currItems.find((item) => item.id === id);
      if (currentItem?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <div className="relative w-full h-64 group">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-lg transition-all duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center p-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-sm mb-2">{description}</p>
        <span className="block text-lg font-bold mb-4">{price}</span>
        <div className="flex space-x-2">
          <button
            onClick={addToCart}
            className="px-4 py-2 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={removeItem}
            className="px-4 py-2 bg-gray-500 text-white font-bold rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Remove
          </button>
        </div>
      </div>

      {/* cartelito noti */}
      <Notification message={notification} />
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
