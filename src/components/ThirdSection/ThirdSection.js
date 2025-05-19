import React from "react";
import "./ThirdSection.css";
import { Link } from "react-router-dom";
import thirdSectionPhotoOne from "../../accets/ThirdSectionPhoto/thirdSectionPhotoOne.jpg";

const ThirdSection = () => {
  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="third_section_parent_div">
      <h1 className="third_section_heading">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, sit!
      </h1>
      <div className="third_section_flex_div">
        {/* Fixed Left Menu */}
        <div className="third_section_link_div">
          <ul>
            <li>
              <button onClick={() => scrollToId("section1")}>
                First Section
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("section2")}>
                Second Section
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("section3")}>
                Third Section
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("section4")}>
                Forth Section
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("section5")}>
                Fifth Section
              </button>
            </li>
          </ul>
        </div>

        {/* Scrollable Right Content */}

        <div className="third_flex_right_div">
          <div id="section1">
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />
            <h2>First Impression</h2>
            <p>
              Users’ first impressions and digital interaction with a company
              are formed by visiting their website. They’ll create an impression
              of the company based solely on the first click that brings them to
              the home page. By making it user-friendly and aesthetically
              pleasing, web design ensures that new users have a positive
              experience. Your page should entice new visitors to learn more
              about your business and the products or services you provide.
            </p>
          </div>
          <div id="section2">
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />
            <h2>Second Impression</h2>
            <p>
              Users’ first impressions and digital interaction with a company
              are formed by visiting their website. They’ll create an impression
              of the company based solely on the first click that brings them to
              the home page. By making it user-friendly and aesthetically
              pleasing, web design ensures that new users have a positive
              experience. Your page should entice new visitors to learn more
              about your business and the products or services you provide.
            </p>
          </div>
          <div id="section3">
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />
            <h2>Third Impression</h2>
            <p>
              Users’ first impressions and digital interaction with a company
              are formed by visiting their website. They’ll create an impression
              of the company based solely on the first click that brings them to
              the home page. By making it user-friendly and aesthetically
              pleasing, web design ensures that new users have a positive
              experience. Your page should entice new visitors to learn more
              about your business and the products or services you provide.
            </p>
          </div>
          <div id="section4">
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />
            <h2>Forth Impression</h2>
            <p>
              Users’ first impressions and digital interaction with a company
              are formed by visiting their website. They’ll create an impression
              of the company based solely on the first click that brings them to
              the home page. By making it user-friendly and aesthetically
              pleasing, web design ensures that new users have a positive
              experience. Your page should entice new visitors to learn more
              about your business and the products or services you provide.
            </p>
          </div>
          <div id="section5">
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />
            <h2>Fifth Impression</h2>
            <p>
              Users’ first impressions and digital interaction with a company
              are formed by visiting their website. They’ll create an impression
              of the company based solely on the first click that brings them to
              the home page. By making it user-friendly and aesthetically
              pleasing, web design ensures that new users have a positive
              experience. Your page should entice new visitors to learn more
              about your business and the products or services you provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
