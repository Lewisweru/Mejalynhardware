import React from "react";

const hardwareImages = [
  { id: 1, src: "/wheelbarrows.jpg", alt: "Wheelbarrows" },
  { id: 2, src: "/wire.jpg", alt: "Welded wire mesh" },
  { id: 3, src: "/cement.jpg", alt: "Welded wire mesh" },
  { id: 4, src: "/barbedwire.jpg", alt: "cement" },
];

const HardwareItems = () => {
  return (
    <div>
      <h1>Hardware Items</h1>
      <p>Here you'll find all the tools and equipment you need.</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {hardwareImages.map((item) => (
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

export default HardwarePage;
