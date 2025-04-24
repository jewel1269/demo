import React from "react";
import Navber from "./navber/navber";
import Hero from "./hero/hero";
import Success from "./SuccessSection/success";
import CloudFeatures from "./CloudFeature/CloudFeature";
import ClassroomSection from "./ClassroomSection/ClassroomSection";
import Footer from "../Footer/footer";

const HomeLayout = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Success />
      <CloudFeatures />
      {/* <TotcIntro /> */}
      <ClassroomSection />
      <Footer/>
    </div>
  );
};

export default HomeLayout;
