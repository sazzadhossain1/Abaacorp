import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import NavigationBar from "../NavigationBar/NavigationBar";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import FourthSection from "../FourthSection/FourthSection";
import AboutUs from "../AboutUs/AboutUs";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <div className="home_parent_div">
      <div className="home_child_div">
        {/* <NavigationBar></NavigationBar> */}
        <HeroSection></HeroSection>
      </div>
      <div>
        <section id="about">
          <AboutUs />
        </section>

        <section id="Services">
          <FourthSection></FourthSection>
        </section>

        <section id="Portfolio">
          <Portfolio />
        </section>

        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        {/* <ThirdSection></ThirdSection> */}
      </div>
    </div>
  );
};

export default Home;
