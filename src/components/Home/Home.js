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
import HowToGetStarted from "../HowToGetStarted/HowToGetStarted";

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
        <HowToGetStarted></HowToGetStarted>
        <section id="Portfolio">
          <Portfolio />
        </section>

        {/* <FirstSection></FirstSection> */}
        <SecondSection></SecondSection>
        {/* <ThirdSection></ThirdSection> */}
      </div>
    </div>
  );
};

export default Home;

// NODE //
// (How to Get Started) ati akti section hobe. Section ti boshbe (portfolio) section er upore. x

//(1. Book a Free Consultation x
//2. Lock on a Plan/Project x
//3. Make a very small Deposit x
//4. Get the Project Delivered & Then Make Full Payment) ai 4 ti line cart akare boshbe. x

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// 2/02/2026 //

// (Who We Are) ai section er photo change korte hobe, Facebook theke group photo add korte hobe. X
// (How to get start) ai section er photo gulo aro relevant korte hobe. X

// (Service) ai section er lorem ipsum text gulo change korte hobe, Abaacorp er main site thke text nite hobe.

// (Portfolio) ai section e 4 ti cart banate hobe, total 8 ti cart boshbe, SEE MORE button boshbe, btn e click korle onno akta page e chole jabe oi page e facebook er protita chobi niye cart akare add korte hobe. X

// Navigation er logo aro aktu left side e nite hobe. X

// Footer e (site map) ai likha ti akshathe korte hobe. X

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// 7/2/2026

// Who we are - ai section er photo change kore face dekha jay amon group photo dite hobe. X
// How to Get Started - ai section er cart er title er font size boro hobe.  X

// Portfolio - ai section er photo gulo photo er size onujai boshbe. cart er background color remove korte hobe. border add korte hobe. X

// Service - ai section er lorem ipsum remove korte hobe. ai section ti cart akare hobe and 4 ti cart korte hobe.

// Servece - section er order(
// Website Design & Development
// Software & System Development
// App Development
// Graphic Design
// video editing
// BPO Support
// digital marketing
// Domain & Hosting
// UI/UX Design
// Social Media Management
// Content Development
// White Label Solution

// Market Research replace to video editing.
// Online Marketing prelace to digital marketing.)
