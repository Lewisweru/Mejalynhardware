import React from 'react';

export default function Banner() {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80"
        alt="Workshop tools"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Your One-Stop Shop for Home & Hardware
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          From power tools to kitchenware, find everything you need for your home improvement and daily living needs.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}