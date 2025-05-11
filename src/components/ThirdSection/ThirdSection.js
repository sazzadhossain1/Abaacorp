import React from "react";
import "./ThirdSection.css";
import { Link } from "react-router-dom";
import thirdSectionPhotoOne from "../../accets/ThirdSectionPhoto/thirdSectionPhotoOne.jpg";

const ThirdSection = () => {
  return (
    <div className="third_section_parent_div">
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, sit!
      </h1>
      <div className="third_section_flex_div">
        <div className="third_section_link_div">
          <ul>
            <li>
              <Link>First Section</Link>
            </li>
            <li>
              {" "}
              <Link>Second Section</Link>
            </li>
            <li>
              <Link>Third Section</Link>
            </li>
            <li>
              <Link>Forth Section</Link>
            </li>
            <li>
              <Link>Fifth Section</Link>
            </li>
          </ul>
        </div>
        <div className="third_flex_right_div">
          <div>
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />.
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
          <div>
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />.
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
          <div>
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />.
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
          <div>
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />.
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
          <div>
            <img className="thirdSecPhoto" src={thirdSectionPhotoOne} alt="" />.
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
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
