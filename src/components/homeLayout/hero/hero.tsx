import { FaPlay } from "react-icons/fa";
import { MdOutlineCalendarToday, MdMailOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import heroImge from "../../../app/assets/image/image 12.png";
const Hero = () => {
  return (
    <section className="relative overflow-hidden  text-white">
      {/* Background curve */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-[#34C4BE] rounded-b-[100%] z-0"></div>

      <div className="relative z-10 container  mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="max-w-xl mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            <span className="text-orange-400">Studying</span>{" "}
            <span className="text-white">Online is now</span>{" "}
            <span className="text-white">much easier</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
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

        {/* Image & Floating Boxes */}
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0">
         
          {/* Floating Card: Calendar */}
          <div className="absolute top-8 left-0 flex items-center gap-2 bg-white p-3 rounded-lg shadow-md text-gray-800">
            <MdOutlineCalendarToday className="text-[#34C4BE]" />
            <div>
              <p className="text-sm font-bold">250k</p>
              <p className="text-xs text-gray-500">Assisted Student</p>
            </div>
          </div>

          {/* Floating Card: Notification */}
          <div className="absolute bottom-12 right-0 flex items-center gap-3 bg-white p-3 rounded-lg shadow-md text-gray-800">
            <MdMailOutline className="text-orange-400" />
            <div>
              <p className="text-sm font-semibold">Congratulations</p>
              <p className="text-xs text-gray-500">Your admission completed</p>
            </div>
          </div>

          {/* Floating Card: Class */}
          <div className="absolute bottom-0 left-0  p-4 rounded-lg shadow-md flex items-center gap-4">
            <Image
              fill
              src={heroImge}
              className="w-full h-full rounded-full"
              alt="Instructor"
            />
            <div>
              <p className="text-sm font-medium">User Experience Class</p>
              <p className="text-xs text-gray-500">Today at 12.00 PM</p>
            </div>
            <button className="px-3 py-1 bg-[#ED3F62] text-white text-xs rounded-md hover:bg-[#d72f4f]">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
