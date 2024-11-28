import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to HomeHardware, your trusted partner in home improvement and household essentials since 2024. We take pride in offering a comprehensive selection of both hardware supplies and household items under one roof.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          What started as a small family-owned hardware store has grown into a one-stop destination for all your home needs. Our journey has been built on the foundation of quality products, expert advice, and exceptional customer service.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are committed to providing our customers with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>High-quality products from trusted brands</li>
          <li>Expert advice from our knowledgeable staff</li>
          <li>Competitive prices and regular special offers</li>
          <li>A wide selection of both hardware and household items</li>
        </ul>
      </div>
    </div>
  );
}
