import { useContext, useState } from "react";
import { CartContext } from "../../context";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    const orderDetails = cart
      .map((item) => `${item.title} (x${item.quantity})`)
      .join(", ");

    console.log("Order created:", orderDetails);

    setCart([]);
    setConfirmationMessage(
      `Thank you for your purchase! You bought: ${orderDetails}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-2xl font-bold mb-2">Cart ({quantity} items)</h1>
      <h2 className="text-xl text-pink-400 mb-4">
        Total: ${totalPrice.toFixed(2)}
      </h2>

      {cart.length > 0 ? (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.title}</span>
                <span>
                  ${(item.price * item.quantity).toFixed(2)} (x{item.quantity})
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="w-full mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700"
          >
            Checkout
          </button>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}

      {confirmationMessage && (
        <p className="mt-4 text-green-600 font-bold">{confirmationMessage}</p>
      )}
    </div>
  );
};
