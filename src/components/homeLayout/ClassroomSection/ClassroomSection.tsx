import Image from "next/image";
import React from "react";

const ClassroomSection: React.FC = () => {
  return (
    <div className="flex justify-center">
        <section className="flex container flex-col md:flex-row items-center justify-between px-10 py-12 bg-white gap-10">
      {/* Text content */}
      <div className="md:w-1/2">
        <div className="relative">
          {/* Left green circle */}
          <span className="absolute -left-6 top-2 w-6 h-6 bg-emerald-400 rounded-full" />
          <h2 className="text-[24px] leading-snug md:text-[28px] font-semibold text-[#1A1A1A]">
            Everything you can do in a physical classroom,{" "}
            <span className="text-[#00BFA5] font-semibold">
              you can do with TOTC
            </span>
          </h2>
        </div>
        <p className="text-[#4F4F4F] mt-5 text-[16px] leading-relaxed">
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </p>
        <a
          href="#"
          className="text-[#2F2E41] mt-5 inline-block underline text-sm font-medium"
        >
          Learn more
        </a>
      </div>

      {/* Image + Video block */}
      <div className="md:w-1/2 relative">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 bg-[#00BFA5] rounded-br-xl z-10" />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#00BFA5] rounded-tl-xl z-10" />

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            width={300}
            height={300}
            src="https://media.mehrnews.com/d/2019/05/01/4/3117660.jpg"
            alt="Classroom"
            className="w-full h-96 bg-cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#00BFA5]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};




export default ClassroomSection;
