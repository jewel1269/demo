import React from "react";
import imag from "@/app/assets/image/Rectangle.png";
import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src={imag}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* White Overlay + Content */}
      <div className="absolute inset-0 bg-opacity-80 p-6 md:p-10 flex flex-col justify-center items-center">
        <div className="relative w-full max-w-3xl mb-6">
          {/* Input and Button inside a relative container */}
          <input
            type="text"
            placeholder="Search your favourite course"
            className="w-full px-4 py-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 pr-16"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition">
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-3xl">
          {[
            "Subject",
            "Partner",
            "Program",
            "Language",
            "Availability", // Corrected typo here
            "Learning Type",
          ].map((label) => (
            <div key={label} className="relative">
              <select className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="">{label}</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
