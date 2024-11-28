import React from 'react';
import ProductCard from '../products/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Professional Tool Set',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80',
    category: 'Tools'
  },
  {
    id: 2,
    name: 'Modern Coffee Table',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1532372320978-9b6d03df3edf?auto=format&fit=crop&q=80',
    category: 'Furniture'
  },
  {
    id: 3,
    name: 'Premium Paint Kit',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    category: 'Paints'
  },
  {
    id: 4,
    name: 'Kitchen Essentials Set',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80',
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