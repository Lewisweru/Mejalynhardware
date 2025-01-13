import React from 'react';

export default function Banner() {
  return (
    <div className="relative bg-gray-900 min-h-[500px]">
  <img
    src="/NEW/IMG-20250105-WA0012.jpg"
    alt="A variety of workshop tools displayed in an organized manner"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
      Your One-Stop Shop for Home & Hardware
    </h1>
    <p className="text-lg text-gray-200 mb-6">
      From power tools to kitchenware, find everything you need for your home improvement and daily living needs.
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
      Shop Now
    </button>
  </div>
</div>

  );
}