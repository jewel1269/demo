import React from "react";
import SearchBar from "../searchbar";
import CourseCard from "./CourseCard";
import LearningPlatform from "./LearningPlatform";
import CreatorsGrid from "./CreatorsGrid";
import Testimonial from "./Testimonial";
import DealsSection from "./DealsSection";

const Courses = () => {
  return (
    <div>
      <SearchBar />
      <CourseCard/>
      <LearningPlatform/>
      <CreatorsGrid/>
      <Testimonial/>
      <DealsSection/>
    </div>
  );
};

export default Courses;
