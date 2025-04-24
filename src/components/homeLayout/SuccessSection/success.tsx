import React from "react";

const Success = () => {
  const stats = [
    { number: "15K+", label: "Students" },
    { number: "75%", label: "Total success" },
    { number: "35", label: "Main questions" },
    { number: "26", label: "Chief experts" },
    { number: "16", label: "Years of experience" },
  ];

  return (
    
   <div className="flex  justify-center">
     <section className="container  bg-white py-16 text-center">
      <h2 className="text-3xl font-bold text-black mb-4">Our Success</h2>
      <p className="text-sm text-gray-500 max-w-xl mx-auto mb-12">
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices
        eu ornare tristique vel nisl orci.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-semibold bg-gradient-to-r from-blue-700 via-sky-500 to-teal-400 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-gray-700 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};

export default Success;
