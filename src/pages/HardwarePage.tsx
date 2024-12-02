import React from "react";

const hardwareImages = [
  { id: 1, src: "/wheelbarrows.jpg", alt: "Wheelbarrows" },
  { id: 2, src: "/wire.jpg", alt: "Welded wire mesh" },
  { id: 3, src: "/cement.jpg", alt: "Cement" },
  { id: 4, src: "/segenge.jpg", alt: "Barbed wire" },
];

const HardwareItems = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hardware Items</h1>
      <p className="text-3xl font-bold text-gray-900 mb-8">Here you'll find all the tools and equipment you need.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {hardwareImages.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.src}
              alt={item.alt}
              className="w-40 h-40 object-cover rounded-lg shadow-md mb-2"
            />
            <p className="text-center text-lg font-medium text-gray-700">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardwareItems;
