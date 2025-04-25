import Image from "next/image";
import { FaStar, FaCheckCircle, FaMobileAlt, FaCertificate, FaLayerGroup } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const CourseOverview = () => {
  return (
    <section className="p-6 md:p-12 bg-white">
      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          {/* Main Image */}
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src="/course-main.jpg"
              alt="Course"
              width={900}
              height={500}
              className="w-full object-cover h-96"
            />
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4">
            {["Overview", "Overview", "Overview", "Overview"].map((label, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full border ${
                  i === 3
                    ? "bg-[#00b3b3] text-white"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Ratings Section */}
          <div className="bg-[#eaf6ff] p-6 rounded-xl">
            <div className="flex gap-8">
              {/* Rating summary */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">4 out of 5</h2>
                <div className="text-[#FFB800] flex justify-center text-xl">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                </div>
                <p className="text-sm text-gray-600">Top Rating</p>
              </div>

              {/* Rating breakdown */}
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-4 text-sm">
                    <p>{stars} Stars</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00b3b3] h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-4 mt-6">
              {[1, 2].map((review) => (
                <div key={review} className="border-t pt-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/avatar.jpg"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Lina</p>
                      <div className="flex text-[#FFB800] text-sm">
                        {Array(5)
                          .fill(0)
                          .map((_, idx) => (
                            <FaStar key={idx} />
                          ))}
                      </div>
                    </div>
                    <span className="ml-auto text-gray-500 text-sm">3 Month</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-700">
                    Class, launched less than a year ago by Blackboard co-founder Michael
                    Chasen, integrates exclusively...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {/* Mini Preview */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/course-main.jpg"
              alt="Preview"
              width={400}
              height={200}
              className="w-full object-cover"
            />
          </div>

          {/* Pricing */}
          <div>
            <p className="text-2xl font-bold text-gray-800">$49.65 <span className="line-through text-gray-400 text-base ml-2">$99.99</span> <span className="text-[#00b3b3] font-semibold text-sm">50% Off</span></p>
            <p className="text-[#00b3b3] text-sm mt-1"><FiClock className="inline-block mr-1" />11 hour left at this price</p>
          </div>

          <button className="w-full bg-[#00b3b3] text-white py-2 rounded-lg font-semibold">Buy Now</button>

          {/* Included Items */}
          <div className="border-t pt-4">
            <p className="font-semibold text-lg">This Course included</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#00b3b3]" /> Money Back Guarantee
              </li>
              <li className="flex items-center gap-2">
                <FaMobileAlt className="text-[#00b3b3]" /> Access on all devices
              </li>
              <li className="flex items-center gap-2">
                <FaCertificate className="text-[#00b3b3]" /> Certification of completion
              </li>
              <li className="flex items-center gap-2">
                <FaLayerGroup className="text-[#00b3b3]" /> 32 Modules
              </li>
            </ul>
          </div>

          {/* Team Offer */}
          <div className="border-t pt-4">
            <p className="font-semibold text-lg">Training 5 or more people</p>
            <p className="text-sm text-gray-700 mt-2">
              Class, launched less than a year ago by Blackboard co-founder Michael Chasen...
            </p>
          </div>

          {/* Social Share */}
          <div className="border-t pt-4">
            <p className="font-semibold mb-2">Share this course</p>
            <div className="flex gap-3 text-gray-500 text-xl">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
