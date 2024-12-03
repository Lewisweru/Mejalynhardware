import React, { useState } from 'react';
import { Search, ShoppingCart, Hammer, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="sm:hidden p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Hammer className="h-8 w-8 text-black-600" />
            <Link to="/" className="text-2xl font-bold text-gray-800 ml-2">
              MEJALYNE BARAKA HARDWARE
            </Link>
          </div>

          {/* Search Bar for Larger Screens */}
          <div className="hidden sm:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <Navigation />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 bg-white shadow-md rounded-lg">
            <ul className="space-y-2 p-4">
              <li>
                <Link
                  to="/hardware"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Hardware
                </Link>
              </li>
              <li>
                <Link
                  to="/household"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Blessed Varieties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
