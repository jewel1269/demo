import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-[#eaf6fe] p-6 md:p-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-[#1f2937]">
        What our students have to say
      </h2>
      <div className="bg-white rounded-3xl px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center gap-8 shadow-md">
        {/* Student Image with abstract background */}
        <div className="relative w-64 h-64 shrink-0">
          {/* Decorative Circles */}
          <div className="absolute bg-[#b2f3d5] w-20 h-20 rounded-full -bottom-6 -left-6 z-0"></div>
          <div className="absolute bg-[#ffe0c8] w-24 h-24 rounded-full -bottom-4 -right-4 z-0"></div>
          <div className="absolute bg-[#fff6ad] w-12 h-12 rounded-full -top-4 right-12 z-0"></div>
          {/* Main circle */}
          <div className="rounded-full overflow-hidden w-full h-full relative z-10">
            <Image
              src="/student-main.jpg" // Place this image in public/
              alt="Main Student"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-[#1f2937]">Savannah Nguyen</h3>
          <p className="text-sm text-gray-500 mb-4">tanya.hill@example.com</p>
          <div className="space-y-1 text-sm text-gray-600 mb-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-[#00b3b3] text-lg mt-2">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Side avatars */}
        <div className="flex flex-row md:flex-col items-center gap-4">
          {["/person1.jpg", "/person2.jpg", "/person3.jpg", "/person4.jpg"].map((src, i) => (
            <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow">
              <Image src={src} alt={`Avatar ${i}`} width={40} height={40} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
