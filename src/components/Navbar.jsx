import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../utils/navLinks";
import { useNavbar } from "../utils/useNavbar";

export default function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useNavbar();

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Heed Consults
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white text-gray-900 shadow-md px-6 py-4 gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={closeMenu}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
