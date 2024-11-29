import React, { useState } from 'react';
import { Hammer, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Branding */}
          <div className="flex items-center">
            <Hammer className="h-8 w-8 text-pink-600" />
            <Link to="/" className="ml-2 text-xl font-semibold text-gray-900">
              MEJALYNE BARAKA HARDWARE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-pink-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-1 px-4 py-4">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)} // Close the menu on link click
                >
                  {category.name}
                </Link>
                {category.subcategories && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {category.subcategories.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          to={sub.path}
                          className="block text-gray-600 hover:text-blue-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                        {sub.items && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {sub.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to={`${sub.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-500 hover:text-blue-400"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
