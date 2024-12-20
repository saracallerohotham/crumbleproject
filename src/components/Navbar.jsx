import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import image from "../assets/image.png";
import { CartContext } from "../context";

// hook par detectar si esta desde el celular
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/signin", label: "Sign In" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/cart", label: "Cart", icon: <FaShoppingCart /> },
  ];

  const renderLinks = (isMobile = false) => (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-center space-y-4"
          : "hidden md:flex space-x-6 font-bold"
      }`}
    >
      {navLinks.map(({ to, label, icon }) => (
        <li key={to}>
          <Link
            to={to}
            onClick={isMobile ? () => setIsOpen(false) : undefined}
            className={`hover:text-gray-500 ${isMobile ? "font-bold" : ""} ${
              icon ? "flex items-center" : ""
            }`}
          >
            {icon && <span className="mr-1">{icon}</span>}
            {label}
            {label === "Cart" && (
              <span className="ml-1 bg-pink-500 text-white px-2 rounded-full">
                {quantity}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );

  const navbarClasses = [
    "fixed top-0 left-0 w-full transition-all duration-300 z-50",
    isMobile && isOpen
      ? "bg-pink-400"
      : isScrolled
      ? "bg-pink-400"
      : "bg-transparent",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
        <img src={image} alt="Logo" className="h-20 w-auto" />
        {renderLinks()}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-pink-400 shadow-lg p-4 mt-2 rounded-b-lg">
          {renderLinks(true)}
        </div>
      )}
    </nav>
  );
};
