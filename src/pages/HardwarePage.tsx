import React from "react";

const hardwareImages = [
  { id: 1, src: "/wheelbarrows.jpg", alt: "Wheelbarrows" },
  { id: 2, src: "/wire.jpg", alt: "Welded wire mesh" },
  { id: 3, src: "/SIMBA-CEMENT-3.jpg", alt: "Simba Cement" },
  { id: 4, src: "/segenge.jpg", alt: "Barbed wire" },
  { id: 5, src: "/logs.jpg", alt: "Wood posts" },
  { id: 6, src: "/modernmabati.jpg", alt: "Modern roofing sheets" },
  { id: 7, src: "/plasticPipes.jpg", alt: "PVC pipes" },
  { id: 8, src: "/nails.jpg", alt: "Nails" },
  { id: 9, src: "/wood.jpg", alt: "Plywood sheets" },
  { id: 10, src: "/IMG-20241127-WA0005.jpg", alt: "Metal pipes" },
  { id: 11, src: "/toiltes.jpg", alt: "Ceramic toilet and sinks " },
  { id: 12, src: "/morePaint.jpg", alt: "Paint" },
  { id: 13, src: "/morecement.jpg", alt: "Cement" },
  { id: 14, src: "/doors.jpg", alt: "wood panels" },
  { id: 15, src: "/wiremesh.jpg", alt: "vehicle transporting" },
  { id: 16, src: "/pvcpipes.jpg", alt: "PVC pipes" },
  { id: 17, src: "/IMG-20241127-WA0040.jpg", alt: "pipe fittings" },
  { id: 18, src: "/tradMabati.jpg", alt: "Traditional roofing sheets" },
];

const HardwareItems = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hardware Items</h1>
      <p className="font-times text-lg">Here you'll find all the tools and equipment you need.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {hardwareImages.map((item) => (
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

export default HardwareItems;
