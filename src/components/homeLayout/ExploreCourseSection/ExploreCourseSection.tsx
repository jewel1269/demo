import Image from "next/image";
import React from "react";

const courses = [
  { label: "Ut sed Eros", color: "bg-orange-500" },
  { label: "Curabitur Egestas", color: "bg-pink-400" },
  { label: "Quisque Conseq.", color: "bg-orange-700" },
  { label: "Cras convallis", color: "bg-yellow-400" },
  { label: "Vestibulum facil...", color: "bg-purple-300" },
  { label: "Ut Sed Eros", color: "bg-blue-400" },
  { label: "Vestibulum facilibu", color: "bg-green-300" },
];

const ExploreCourseSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-12 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Explore Course
          </h2>
          <p className="text-gray-500 text-sm">
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
          <div className="mt-4 text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span>🧠</span> Lorem Ipsum
          </div>
        </div>
        <button className="text-sm text-cyan-500 hover:underline font-medium">
          SEE ALL
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Rotated Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`w-24 h-40 rounded-2xl flex items-center justify-center text-white font-medium text-center shadow-md transform rotate-[-20deg]`}
              style={{ backgroundColor: "inherit" }}
            >
              <div
                className={`${course.color} w-full h-full rounded-2xl flex items-center justify-center p-2`}
              >
                <span className="rotate-[20deg]">{course.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Course Highlight Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <div className="flex items-center gap-4">
            <Image
              width={300}
              height={300}
              src="https://images.unsplash.com/photo-1604908177520-472c65bcd9b2"
              alt="Course"
              className="w-28 h-28 object-cover rounded-full border"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Integer id Orc Sed Ante Tincidunt
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Cras convallis lacus orci, tristique tincidunt magna fringilla
                at faucibus vel.
              </p>
              <div className="flex items-center gap-1 text-yellow-400 mt-2 text-sm">
                {"★★★★★"}
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-gray-700">$ 450</span>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded-full text-sm">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourseSection;
