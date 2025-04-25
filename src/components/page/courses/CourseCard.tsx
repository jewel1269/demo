import Image from "next/image";
import React from "react";

interface Course {
  id: number;
  category: string;
  duration: string;
  title: string;
  description: string;
  author: string;
  oldPrice: number;
  newPrice: number;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image: "/images/image1.jpg",
  },
  {
    id: 2,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image: "/images/image2.jpg",
  },
  {
    id: 1,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image: "/images/image1.jpg",
  },
  {
    id: 2,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image: "/images/image2.jpg",
  },
  {
    id: 1,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image: "/images/image1.jpg",
  },
  {
    id: 2,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image: "/images/image2.jpg",
  },
  // Add more course objects as needed
];

const CourseCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:px-20 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
        >
          <Image
            width={300}
            height={300}
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>{course.category}</span>
              <span>{course.duration}</span>
            </div>
            <h2 className="text-md font-semibold text-gray-800">
              {course.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{course.description}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Image
                  height={400}
                  width={400}
                  src="/images/avatar.jpg"
                  alt="author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {course.author}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm line-through text-gray-400">
                  ${course.oldPrice}
                </p>
                <p className="text-green-500 font-semibold text-sm">
                  ${course.newPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
