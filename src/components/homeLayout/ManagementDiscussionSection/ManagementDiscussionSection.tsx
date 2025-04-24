import Image from "next/image";
import React from "react";

const ManagementDiscussionSection: React.FC = () => {
  return (
    <div className="flex justify-center">
      <section className="py-20 px-6 container bg-white space-y-20">
        {/* Top Row: Class Management */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-12">
          {/* Left Text */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-bold text-indigo-900 leading-snug">
              <span className="text-teal-500">Class Management</span>
              <br />
              Tools for Educators
            </h2>
            <p className="text-gray-500 mt-4">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>

          {/* GradeBook Image Placeholder */}
          <div className="relative w-full max-w-lg">
            <Image
              height={300}
              width={300}
              src="https://i.ibb.co/Chrsrzf/gradebook-mockup.png" 
              alt="Gradebook"
              className="rounded-xl shadow-xl"
            />
            {/* Decorative Stars or Icons could go here */}
          </div>
        </div>

        {/* Bottom Row: One-on-One Discussion */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-12">
          {/* Private Chat Image */}
          <div className="relative w-full max-w-lg">
            <Image
              height={300}
              width={300}
              src="https://i.ibb.co/xDmsjvd/private-chat-ui.png" // Replace with your real image
              alt="Private Discussion"
              className="rounded-xl shadow-xl"
            />
          </div>

          {/* Right Text */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-bold text-indigo-900 leading-snug">
              One-on-One <br />
              <span className="text-teal-500">Discussions</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-2 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-50 transition">
            See more features
          </button>
        </div>
      </section>
    </div>
  );
};

export default ManagementDiscussionSection;
