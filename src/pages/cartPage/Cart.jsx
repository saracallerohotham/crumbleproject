import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCart([]);
    }
  };

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

  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const tax = totalPrice * 0.1;
  const finalPrice = totalPrice + tax;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <h1 className="text-2xl font-bold mb-2">Cart ({quantity} items)</h1>
      <h2 className="text-xl text-pink-400 mb-4">
        Subtotal: ${totalPrice.toFixed(2)} | Tax: ${tax.toFixed(2)} | Total: $
        {finalPrice.toFixed(2)}
      </h2>

      {cart.length > 0 ? (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{item.title}</span>
                <div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="w-full mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700"
          >
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full mt-2 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500"
          >
            Clear Cart
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
