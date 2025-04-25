import Image from "next/image";
import React from "react";

const features = [
  "Free E-book, video & consolation",
  "Top instructors from around world",
  "Top courses from your team",
];

const LearningPlatform: React.FC = () => {
  return (
    <div className="bg-[#f0f7ff] rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 max-w-md">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-snug mb-6">
          Know about learning <br /> learning platform
        </h2>
        <ul className="mb-8 space-y-4">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-3 text-gray-600 text-sm"
            >
              <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-teal-600 transition">
          Start learning now
        </button>
      </div>

      {/* Right Video Call UI */}
      <div className="flex-1 relative flex flex-col items-center justify-center">
        {/* Video Call Window */}
        <div className="bg-white rounded-xl p-4 shadow-lg w-[340px] md:w-[400px] relative">
          <div className="grid grid-cols-2 gap-3">
            {/* Mentor */}
            <div className="col-span-2 h-40 relative rounded-lg overflow-hidden">
              <Image
                src="/images/mentor.jpg"
                alt="Mentor"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                Mentor
              </div>
            </div>

            {/* Other Participants */}
            {[
              { name: "sarah", label: "Sarah" },
              { name: "adam", label: "Adam" },
              { name: "kevin", label: "Kevin" },
              { name: "patricia", label: "Patricia" },
            ].map((user, idx) => (
              <div
                key={idx}
                className="relative h-20 w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/${user.name}.jpg`}
                  alt={user.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-[10px] px-1 rounded">
                  {user.label}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-blue-600 text-white text-sm px-5 py-1.5 rounded-md">
              Pres
            </button>
            <button className="bg-pink-500 text-white text-sm px-5 py-1.5 rounded-md">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
