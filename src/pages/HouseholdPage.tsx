import React from "react";

const householdImages = [
  { id: 1, src: "/Household/HQnonstickpan.jpg", alt: "Non stick pans" },
  { id: 2, src: "/Household/jikos.jpg", alt: "Jikos" },
  { id: 3, src: "/Household/kienyejiSufurias.jpg", alt: "Sufurias" },
  { id: 3, src: "/Household/plasticSeats.jpg", alt: "Seats" },
];

const HouseholdItems = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Household Items</h1>
      <p className="font-times text-lg">Explore a variety of household essentials and utilities.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {householdImages.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-center text-lg font-medium text-gray-700">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseholdItems;
