import Image from 'next/image';
import React from 'react';

const ClassroomFeatures: React.FC = () => {
  return (
    <div className="flex justify-center">
        <section className="py-16 px-4 bg-white container  flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Section - Image/Video UI */}
      <div className="relative bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 relative max-w-6xl">
            <Image width={700} height={700} src="https://randomuser.me/api/portraits/women/1.jpg" alt="Emily" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Instructor</div>
            <div className="absolute bottom-2 right-2 bg-white text-gray-700 text-xs px-2 py-0.5 rounded">Emily Hudson</div>
          </div>
          <div className="relative">
            <Image width={400} height={300} src="https://randomuser.me/api/portraits/women/2.jpg" alt="Tania" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 bg-white text-gray-700 text-xs px-2 py-0.5 rounded">Tania Clark</div>
          </div>
          <div className="relative">
            <Image width={400} height={300} src="https://randomuser.me/api/portraits/men/3.jpg" alt="Adam" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 bg-white text-gray-700 text-xs px-2 py-0.5 rounded">Adam Levi</div>
          </div>
          <div className="relative">
            <Image width={400} height={300} src="https://randomuser.me/api/portraits/men/4.jpg" alt="Chris" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 bg-white text-gray-700 text-xs px-2 py-0.5 rounded">Chris Morales</div>
          </div>
          <div className="relative">
            <Image width={400} height={300} src="https://randomuser.me/api/portraits/women/5.jpg" alt="Patricia" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 bg-white text-gray-700 text-xs px-2 py-0.5 rounded">Patricia Mendoza</div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-medium text-sm">Present</button>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full font-medium text-sm">Call</button>
        </div>
      </div>

      {/* Right Section - Features */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-700">
          <span className="text-indigo-900">Our </span>
          <span className="text-teal-500">Features</span>
        </h2>
        <p className="text-gray-500 mt-2 mb-6">
          This very extraordinary feature, can make learning activities more efficient
        </p>

        <h3 className="text-2xl font-bold text-indigo-900 leading-snug">
          A <span className="text-teal-500">user interface</span> designed for the classroom
        </h3>

        <ul className="mt-6 space-y-4 text-left text-gray-600">
          <li className="flex items-start gap-3">
            <span className="bg-gray-100 p-2 rounded-full">📋</span>
            Teachers don’t get lost in the grid view and have a dedicated Podium space.
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-gray-100 p-2 rounded-full">🧑‍🏫</span>
            TA’s and presenters can be moved to the front of the class.
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-gray-100 p-2 rounded-full">📊</span>
            Teachers can easily see all students and class data at one time.
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default ClassroomFeatures;
