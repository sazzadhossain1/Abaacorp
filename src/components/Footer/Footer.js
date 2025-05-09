import React from "react";
import "./Footer.css";
import footerLogo from "../../accets/footerPhoot/footerLogo/logo.png";

const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_child_div">
        <div className="footer_text_div">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            error.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quia
            asperiores delectus pariatur aut porro voluptatem!
          </p>
        </div>
        <div className="footer_blank_div"></div>
        <div className="footer_grid_div">
          <div>
            <img className="footerLogo" src={footerLogo} alt="" />
            <p>Address:</p>
            <p>3653 Briargrove Ln, Dallas, TX 75287</p>
            <div>
              <i>I</i>
              <div>
                <p> +1.214.736.5989</p>
                <p>abaacorp.com@gmail.com</p>
              </div>
            </div>
            <div>
              <i>I</i>
              <i>I</i>
              <i>I</i>
              <i>I</i>
              <i>I</i>
            </div>
          </div>
          <div className="footer_site_map_div">
            <h2>Site Map</h2>
            <p>- About Us</p>
            <p>- Our Service</p>
            <p>- Portfolio</p>
            <p>- Contact</p>
            <p>- Blogs</p>
            <p>- Admin Login</p>
          </div>
          <div className="footer_working_div">
            <h2>Working Hours</h2>
            <span className="">
              Our support is available to help you 24 hours a day, seven days
              week
            </span>
            <div className="footer_time_div">
              <p>Saturday: 8:00 am - 9:00 pm</p>
              <p>Sunday: 8:00 am - 9:00 pm</p>
              <p>Monday: 8:00 am - 9:00 pm</p>
              <p>Tuesday: 8:00 am - 9:00 pm</p>
              <p>Wednesday: 8:00 am - 9:00 pm</p>
              <p>Thursday: 8:00 am - 9:00 pm</p>
            </div>
          </div>
        </div>
        <small className="copyright">
          Copyright © 2025 || All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
