import Image from "next/image";
import React from "react";

const creators = [
  {
    name: "Jane Cooper",
    img: "/images/jane.jpg",
  },
  {
    name: "Adam",
    img: "/images/adam.jpg",
  },
  {
    name: "Tomara",
    img: "/images/tomara.jpg",
  },
  {
    name: "Jane Cooper",
    img: "/images/jane.jpg",
  },
  {
    name: "Jane Cooper",
    img: "/images/jane.jpg",
  },
  {
    name: "Jane Cooper",
    img: "/images/jane.jpg",
  },
];

const CreatorsGrid: React.FC = () => {
  return (
    <div className="px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Classes tought by real creators
        </h2>
        <a
          href="#"
          className="text-teal-600 text-sm font-medium hover:underline"
        >
          See all
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {creators.map((creator, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-5 text-center hover:shadow-md transition"
          >
            <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
              <Image
                src={creator.img}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              {creator.name}
            </h4>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsGrid;
