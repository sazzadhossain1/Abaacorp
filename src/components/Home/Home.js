import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import NavigationBar from "../NavigationBar/NavigationBar";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import FourthSection from "../FourthSection/FourthSection";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div className="home_parent_div">
      <div className="home_child_div">
        {/* <NavigationBar></NavigationBar> */}
        <HeroSection></HeroSection>
      </div>
      <div>
        <AboutUs></AboutUs>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
      </div>
    </div>
  );
};

export default Home;
