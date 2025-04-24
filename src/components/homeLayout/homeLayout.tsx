import React from "react";
import Navber from "./navber/navber";
import Hero from "./hero/hero";
import Success from "./SuccessSection/success";
import CloudFeatures from "./CloudFeature/CloudFeature";
import TotcIntro from "./TotcIntro/TotcIntro";
import ClassroomSection from "./ClassroomSection/ClassroomSection";

const HomeLayout = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Success />
      <CloudFeatures />
      <TotcIntro />
      <ClassroomSection />
    </div>
  );
};

export default HomeLayout;
