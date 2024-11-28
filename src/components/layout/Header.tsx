import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
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
              Mejalyne Baraka Hardware
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

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
