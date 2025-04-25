import Image from "next/image";

const deals = [
  {
    img: "/deal1.jpg",
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: "/deal2.jpg",
    discount: "10%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: "/deal3.jpg",
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const DealsSection = () => {
  return (
    <section className="px-4 md:px-16 py-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold">
          Top Education offers and deals are listed here
        </h2>
        <a
          href="#"
          className="text-[#00b3b3] text-sm font-medium hover:underline"
        >
          See all
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            {/* Background Image */}
            <Image
              src={deal.img}
              alt={deal.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end text-white">
              <div className="absolute top-4 left-4 bg-[#00b3b3] px-3 py-1 text-sm font-bold rounded text-white">
                {deal.discount}
              </div>
              <h3 className="text-base font-semibold mb-1">{deal.title}</h3>
              <p className="text-sm text-white/90">{deal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
