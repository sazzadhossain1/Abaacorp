import React from "react";
import "./AboutUs.css";
import aboutUs from "../../accets/aboutUs/aboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs_grid_div">
      <div className="aboutUs_text_div">
        <h1>
          About <span className="us">Us</span>
        </h1>
        <p>
          We are a group of passionate professionals who always adopt
          result-oriented and innovative techniques to the core that help in
          enhancing your business through information technology.
        </p>
        <p>
          We are best known for quality Software Development, Mobile App
          Development, Website Design and Development, Graphics, Animation &
          Motion Graphics as well as Digital Marketing Services along with
          Search Engine Optimization.
        </p>
      </div>

      <div className="aboutUs_img_div">
        <img src={aboutUs} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
