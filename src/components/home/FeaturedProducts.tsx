import React from 'react';
import ProductCard from '../products/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Modern Toilets and sinks',
    image: '/Toiltes.jpg',
    category: 'Tools'
  },
  {
    id: 2,
    name: 'Wheelbarrows',
    image: '/wheelbarrows.jpg',
    category: 'Tools'
  },
  {
    id: 3,
    name: 'Premium Paints',
    image: '/paints.jpg',
    category: 'Paints'
  },
  {
    id: 4,
    name: 'Kitchen Non-stick pots and pans',
    image: '/nonstickSufurias.jpg',
    category: 'Kitchenware'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}