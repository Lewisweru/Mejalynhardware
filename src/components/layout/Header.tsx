import React from 'react';
import { Search, ShoppingCart, Menu , X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>

            <Link to="/" className="text-2xl font-bold text-gray-800 ml-2">
              MEJALYNE BARAKA HARDWARE
            </Link>
          </div>
          
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
        <Navigation />
      </div>
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Jesse Nails</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#gallery" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#booking" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Book Now</a>
              <a href="#contact" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/hardware" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Hardware</a>
            <a href="/household" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Household</a>
            <a href="/about" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">About us</a>
            <a href="/contact" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
