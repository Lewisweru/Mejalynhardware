import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: 'Hardware',
    path: '/hardware',
    subcategories: [
      { 
        name: 'Tools',
        path: '/hardware/tools',
        items: [
          'Power Drills',
          'Hammer Sets',
          'Screwdriver Kits',
          'Measuring Tools',
          'Hand Saws',
          'Power Sanders',
          'Tool Storage',
          'Work Gloves'
        ]
      },
      { 
        name: 'Paints',
        path: '/hardware/paints',
        items: [
          'Interior Paint',
          'Exterior Paint',
          'Primers',
          'Paint Brushes',
          'Paint Rollers',
          'Spray Paint',
          'Wood Stains',
          'Paint Trays'
        ]
      },
      { 
        name: 'Plumbing',
        path: '/hardware/plumbing',
        items: [
          'Pipe Fittings',
          'Faucets',
          'Shower Heads',
          'Drain Cleaners',
          'Water Filters',
          'Plumbing Tools',
          'Sealants',
          'Water Heaters'
        ]
      }
    ]
  },
  { 
    name: 'Blessed Varieties',
    path: '/household',
    subcategories: [
      { 
        name: 'Kitchenware',
        path: '/household/kitchenware',
        items: [
          'Cookware Sets',
          'Kitchen Knives',
          'Cutting Boards',
          'Food Storage',
          'Bakeware',
          'Kitchen Gadgets',
          'Small Appliances',
          'Dish Sets'
        ]
      },
      { 
        name: 'Furniture',
        path: '/household/furniture',
        items: [
          'Living Room Sets',
          'Dining Tables',
          'Office Chairs',
          'Bedroom Sets',
          'Storage Cabinets',
          'Bookshelves',
          'TV Stands',
          'Outdoor Furniture'
        ]
      },
      { 
        name: 'Decor',
        path: '/household/decor',
        items: [
          'Wall Art',
          'Throw Pillows',
          'Area Rugs',
          'Lighting Fixtures',
          'Mirrors',
          'Curtains',
          'Vases',
          'Picture Frames'
        ]
      }
    ]
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  return (
    <nav className="hidden sm:block border-t">
      <ul className="flex space-x-8 py-4">
        {categories.map((category) => (
          <li key={category.name} className="group relative">
            <Link 
              to={category.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {category.name}
            </Link>
            {category.subcategories && (
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 z-50">
                {category.subcategories.map((sub) => (
                  <div key={sub.name} className="group/sub relative">
                    <Link
                      to={sub.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                    >
                      {sub.name}
                    </Link>
                    {sub.items && (
                      <div className="hidden group-hover/sub:block absolute left-full top-0 bg-white shadow-lg rounded-lg py-2 w-48 -ml-1">
                        {sub.items.map((item) => (
                          <Link
                            key={item}
                            to={`${sub.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}