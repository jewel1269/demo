import React from "react";
import Navber from "./navber/navber";
import Hero from "./hero/hero";
import Success from "./SuccessSection/success";
import CloudFeatures from "./CloudFeature/CloudFeature";
import ClassroomSection from "./ClassroomSection/ClassroomSection";
import Footer from "../Footer/footer";
import ClassroomFeatures from "./ClassroomFeatures/ClassroomFeatures";
import TeacherToolsSection from "./TeacherToolsSection/TeacherToolsSection";
import AssessmentsSection from "./AssessmentsSection/AssessmentsSection";
import ManagementDiscussionSection from "./ManagementDiscussionSection/ManagementDiscussionSection";
import ExploreCourseSection from "./ExploreCourseSection/ExploreCourseSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import NewsSection from "./NewsSection/NewsSection";

const HomeLayout = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Success />
      <CloudFeatures />
      {/* <TotcIntro /> */}
      <ClassroomSection />
      <ClassroomFeatures />
      <TeacherToolsSection />
      <AssessmentsSection />
      <ManagementDiscussionSection />
      <ExploreCourseSection />
      <TestimonialSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomeLayout;
