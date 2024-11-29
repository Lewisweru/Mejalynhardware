import React, { useState } from 'react';
import { Search, Menu, X, Hammer,Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/hardware" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/household" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="/about" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">About us</a>
              <a href="/contact" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/hardware" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Hardware</a>
            <a href="/household" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Blessed varieties</a>
            <a href="/contact" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
            <a href="/about" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">About us</a>
          </div>
        </div>
      )}
    </header>
  );
}
