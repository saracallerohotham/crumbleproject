import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import image from "../assets/image.png";
import { CartContext } from "../context";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-pink-400" : "bg-transparent"
      } z-50`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
        <img src={image} alt="Logo" className="h-20 w-auto" />
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/signin" className="hover:text-gray-500">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/locations" className="hover:text-gray-500">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/cart" className="flex items-center">
              <FaShoppingCart className="mr-1" />
              <span className="bg-pink-500 text-white px-2 rounded-full">
                {quantity}
              </span>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-gray-500">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-gray-500">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="hover:text-gray-500 flex items-center"
              >
                <FaShoppingCart className="mr-1" />
                <span className="ml-1 bg-pink-500 text-white px-2 rounded-full">
                  {}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
