import React from 'react';
// import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  //price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
      </div>
    </div>
  );
}