import React from "react";
import "./Footer.css";
import footerLogo from "../../accets/footerPhoot/footerLogo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
            <div className="footer_number_email_flex_div">
              <FontAwesomeIcon className="faMobileAlt" icon={faMobileAlt} />
              <div>
                <span> +1.214.736.5989</span>
                <br />
                <span>abaacorp.com@gmail.com</span>
              </div>
            </div>
            <div className="footer_media_div">
              <Link to="https://www.facebook.com/Abaacorp/" target="_blank">
                <FontAwesomeIcon className="faFacebook" icon={faFacebookF} />
              </Link>
              <Link to="https://x.com/abaacorp" target="_blank">
                <FontAwesomeIcon className="faTwitter" icon={faTwitter} />
              </Link>
              <Link
                to="https://www.linkedin.com/abaacorp?_l=en_US"
                target="_blank"
              >
                <FontAwesomeIcon className="faLinkedin" icon={faLinkedin} />
              </Link>
              <Link to="https://www.instagram.com/abaacorp" target="_blank">
                <FontAwesomeIcon className="faInstagram" icon={faInstagram} />
              </Link>
              <Link to="https://www.youtube.com/abaacorp" target="_blank">
                <FontAwesomeIcon className="faYoutube" icon={faYoutube} />
              </Link>
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
