import React from "react";

const householdImages = [
  { id: 1, src: "/Household/blessedvarieties.jpg", alt: "Shop" },
  { id: 2, src: "/Household/HQnonstickpan.jpg", alt: "Non stick pans" },
  { id: 3, src: "/Household/jikos.jpg", alt: "Jikos" },
  { id: 4, src: "/Household/kienyejiSufurias.jpg", alt: "Sufurias" },
  { id: 5, src: "/Household/anotherteaset.jpg", alt: "ceramic tea set" },
  { id: 6, src: "/Household/sugarholder.jpg", alt: "Sugar holder" },
  { id: 7, src: "/Household/brownwineglasses.jpg", alt: "Wine glasses" },
  { id: 8, src: "/Household/plates.jpg", alt: "Bowls" },
  { id: 9, src: "/Household/waterbottles.jpg", alt: "Water bottles" },
  { id: 10, src: "/Household/juicejar.jpg", alt: "Juice jar" },
  { id: 11, src: "/Household/waterholder.jpg", alt: "Elegant Crystal Water glass" },
  { id: 12, src: "/Household/highgradevacuumflask.jpg", alt: "High grade vacuum flask" },
  { id: 13, src: "/Household/blinkmaxglasses.jpg", alt: "Blink max glasses" },
  { id: 14, src: "/Household/ceremicmugs.jpg", alt: "Ceramic mugs" },
  { id: 15, src: "/Household/plasticholder.jpeg", alt: "Plastic plates holder" },
  { id: 16, src: "/Household/LAUNDRY.jpeg", alt: "Laundry basins" },
  { id: 17, src: "/Household/market.jpg", alt: "Plastic varieties" },
  { id: 18, src: "/Household/basins.jpg", alt: "Basins" },
  { id: 19, src: "/Household/plates2.jpg", alt: "plates" },
  { id: 20, src: "/NEW/IMG-20250105-WA0008.jpg", alt: "Plastic baskets and containers" },
  { id: 21, src: "/NEW/IMG-20250105-WA0011.jpg", alt: "Laundry bins" },
  { id: 22, src: "/NEW/IMG-20241231-WA0085.jpg", alt: "Stainless steel pots and pans" },
  { id: 23, src: "/NEW/IMG-20241231-WA0093.jpg", alt: "Florence hotpots 4pcs" },
  { id: 24, src: "/NEW/IMG-20241231-WA0094.jpg", alt: "Goldstar turkish hotpots 4pcs" },
  
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
