import React from "react";

const householdImages = [
  { id: 1, src: "nonstickSufurias", alt: "Non tick pans" },
  { id: 2, src: "/jikos.jpg", alt: "Jikos" },
  { id: 3, src: "kienyejiSufurias", alt: "Sufurias" },
];

const HouseholdItems = () => {
  return (
    <div>
      <h1>Household Items</h1>
      <p>Explore a variety of household essentials and utilities.</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {householdImages.map((item) => (
          <div key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p>{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseholdItems;
