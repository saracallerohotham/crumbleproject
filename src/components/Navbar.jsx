import { useState, useEffect } from "react";
import image from "../assets/image.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-pink-400" : "bg-transparent"
      } z-50`} // Agregué z-50 para asegurarme de que el navbar esté por encima de otros elementos
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
        {/* Logo */}
        <img src={image} alt="Crumbl Logo" className="h-20 w-auto" />

        {/* Escritorio */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <a href="#!" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#!" className="hover:text-gray-500">
              Menu
            </a>
          </li>
          <li>
            <a href="#!" className="hover:text-gray-500">
              Locations
            </a>
          </li>
          <li>
            <a href="#!" className="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#!" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-500">
                Menu
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-500">
                Locations
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
