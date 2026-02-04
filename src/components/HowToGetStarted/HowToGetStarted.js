import React from "react";
import "./HowToGetStarted.css";
import photoOne from "../../accets/HowToGetStarted/photoOne.png";
import photoTwo from "../../accets/HowToGetStarted/photoTwo.jpg";
import photoThree from "../../accets/HowToGetStarted/photoThree.png";
import photoFour from "../../accets/HowToGetStarted/photoFour.jpg";

const HowToGetStarted = () => {
  return (
    <div className="HowToGetStarted_parent_div">
      <h1>How to Get Started</h1>
      <div className="howToGetStarted_grid_div">
        <div>
          <img className="howToGetStarted_photo" src={photoOne} alt="" />
          <h4>Book a Free Consultation</h4>
        </div>
        <div>
          <img className="howToGetStarted_photo" src={photoTwo} alt="" />
          <h4>Lock on a Plan/Project</h4>
        </div>
        <div>
          <img className="howToGetStarted_photo" src={photoThree} alt="" />
          <h4>Make a very small Deposit</h4>
        </div>
        <div>
          <img className="howToGetStarted_photo" src={photoFour} alt="" />
          <h4>Get the Project Delivered & Then Make Full Payment</h4>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStarted;
