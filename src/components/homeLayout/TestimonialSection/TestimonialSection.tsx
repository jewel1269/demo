import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Block */}
        <div className="max-w-lg">
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Testimonial</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What They Say?</h2>
          <p className="text-gray-600 mb-3">
            TOTC has got more than 100k positive ratings from our users around the world.
          </p>
          <p className="text-gray-600 mb-6">
            Some of the students and teachers were greatly helped by the Skilline.
          </p>
          <p className="text-gray-600 mb-6">Are you too? Please give your assessment</p>
          <button className="flex items-center gap-2 px-5 py-2 border border-cyan-400 text-cyan-500 rounded-full font-medium hover:bg-cyan-50 transition">
            Write your assessment <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Image + Card */}
        <div className="relative w-full max-w-sm">
          <Image
           width={300}
           height={300}
            src="https://images.unsplash.com/photo-1614282225334-0a8942e3f6b1"
            alt="Happy Student"
            className="w-full rounded-2xl object-cover"
          />
          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer">
            <ArrowRight className="text-cyan-500" size={18} />
          </div>

          {/* Testimonial Card */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 w-[95%]">
            <p className="text-gray-600 text-sm mb-3">
              Thank you so much for your help. It’s exactly what I’ve been looking for. You won’t
              regret it. It really saves me time and effort. TOTC is exactly what our business has
              been lacking.
            </p>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-gray-800">Gloria Rose</div>
              <div className="text-sm text-gray-400">
                ⭐⭐⭐⭐⭐ <span className="ml-1">12 reviews at Yelp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
