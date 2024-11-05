// src/components/Cart.js
import { useContext, useState } from "react";
import { CartContext } from "../../context";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const handleCheckout = () => {
    // Simular la creación de un pedido
    const orderDetails = cart
      .map((item) => `${item.title} (x${item.quantity})`)
      .join(", ");

    // Aquí podrías enviar los detalles a un servidor o realizar otras acciones relacionadas con la compra
    console.log("Order created:", orderDetails);

    // Limpiar el carrito
    setCart([]);

    // Mostrar mensaje de confirmación
    setConfirmationMessage(
      `Thank you for your purchase! You bought: ${orderDetails}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="text-2xl font-bold text-center mb-4 text-black">
        Items in cart: {quantity}
      </div>
      <div className="text-xl font-bold text-center text-pink-400 mb-4">
        Total: ${totalPrice.toFixed(2)}
      </div>

      {cart.length === 0 ? (
        <div className="text-lg text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="w-full max-w-md">
          <ul className="bg-white rounded-lg shadow-md">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between p-4 border-b">
                <span className="font-semibold">{item.title}</span>
                <span>
                  ${(item.price * item.quantity).toFixed(2)} ({item.quantity})
                </span>
              </li>
            ))}
          </ul>
          {/* Contenedor para centrar el botón */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleCheckout}
              className="px-4 py-2 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-700 transition-colors duration-300"
            >
              Buy
            </button>
          </div>
        </div>
      )}

      {/* Mensaje de confirmación */}
      {confirmationMessage && (
        <div className="mt-4 text-green-600 font-bold">
          {confirmationMessage}
        </div>
      )}
    </div>
  );
};
