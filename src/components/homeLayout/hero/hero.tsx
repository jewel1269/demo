import { FaPlay } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import heroImge from "../../../app/assets/image/image 12.png";

const Hero = () => {
  return (
    <section className="relative bg-[#34C4BE] lg:h-[500px] text-white overflow-hidden">
      {/* U-shape Curve Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-0">
      <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
        {/* Left Text */}
        <div className="max-w-xl mb-16 lg:mb-0">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            <span className="text-orange-200">Studying</span>{" "}
            <span className="text-white">Online is now</span>{" "}
            <span className="text-white">much easier</span>
          </h1>
          <p className="mt-6 text-lg text-white">
            TOTC is an interesting platform that will teach you in a more
            interactive way.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 text-base font-semibold text-[#34C4BE] bg-white rounded-full shadow-md hover:bg-gray-200"
            >
              Join for free
            </Link>
            <button className="flex items-center text-white hover:text-gray-200 gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-[#34C4BE] rounded-full">
                <FaPlay />
              </div>
              <span className="font-medium">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* Right Side - Big Image and Floating Cards */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Big Image */}
          <div className="relative w-72 h-96 -mt-12  overflow-hidden ">
            <Image
              src={heroImge}
              alt="Hero Main"
              fill
              className="bg-cover"
            />
          </div>

          {/* Instructor Card - Top Right */}
          <div className="absolute top-0 right-0 bg-white text-gray-800 p-4 rounded-lg shadow-md w-64 flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={heroImge}
                alt="Instructor"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">User Experience Class</p>
              <p className="text-xs text-gray-500">Today at 12.00 PM</p>
            </div>
          </div>

          {/* Assisted Student Card - Below Instructor Card */}
          <div className="absolute top-24 right-0 bg-white text-gray-800 p-4 rounded-lg shadow-md w-64 flex items-center gap-3">
            <MdOutlineCalendarToday className="text-[#34C4BE] text-xl" />
            <div>
              <p className="text-sm font-bold">250k</p>
              <p className="text-xs text-gray-500">Assisted Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
