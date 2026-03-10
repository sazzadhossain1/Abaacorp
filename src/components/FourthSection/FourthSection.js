import React from "react";
import "./FourthSection.css";

import software from "../../accets/forthSectionPhoto/iconPhoto/software-development.png";
import appDevelopment from "../../accets/forthSectionPhoto/iconPhoto/app-development.png";
import websiteDesign from "../../accets/forthSectionPhoto/iconPhoto/web-design.png";
import bpoSupport from "../../accets/forthSectionPhoto/iconPhoto/bpo-support.png";
import domain from "../../accets/forthSectionPhoto/iconPhoto/web-hosting.png";
import DigitalMarketing from "../../accets/forthSectionPhoto/iconPhoto/online-marketing.png";
import Graphic from "../../accets/forthSectionPhoto/iconPhoto/graphic-design.png";
import content from "../../accets/forthSectionPhoto/iconPhoto/content-development.png";
import UIUXD from "../../accets/forthSectionPhoto/iconPhoto/ux-ui-design.png";
import VideoEditing from "../../accets/forthSectionPhoto/iconPhoto/market-research.png";
import socialMedia from "../../accets/forthSectionPhoto/iconPhoto/social-media.png";
import WhiteLabel from "../../accets/forthSectionPhoto/iconPhoto/white-level.png";

const FourthSection = () => {
  return (
    <div className="fourth_section_parent_div">
      {/* <p>Our Process</p> */}
      <h1>Services</h1>
      <div className="fourthSection_grid_div">
        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img
            className="fourthsection_logo_photo"
            src={websiteDesign}
            alt=""
          />
          <div>
            <h3>Website Design & Development</h3>
          </div>
        </div>
        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={software} alt="" />
          <div>
            <h3>Software & System Development</h3>
          </div>
        </div>
        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faFigma} /> */}
          <img
            className="fourthsection_logo_photo"
            src={appDevelopment}
            alt=""
          />
          <div>
            <h3>App Development</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={Graphic} alt="" />
          <div>
            <h3>Graphic Design</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={VideoEditing} alt="" />
          <div>
            <h3>Video Editing</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={bpoSupport} alt="" />
          <div>
            <h3>BPO Support</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img
            className="fourthsection_logo_photo"
            src={DigitalMarketing}
            alt=""
          />
          <div>
            <h3>Digital Marketing</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={domain} alt="" />
          <div>
            <h3>Domain & Hosting</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo UI-UX" src={UIUXD} alt="" />
          <div>
            <h3>UI/UX Design</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={socialMedia} alt="" />
          <div>
            <h3>Social Media Management</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={content} alt="" />
          <div>
            <h3>Content Development</h3>
          </div>
        </div>

        <div className="fourthSection_flex_div">
          {/* <FontAwesomeIcon className="fourthIcon" icon={faPenRuler} /> */}
          <img className="fourthsection_logo_photo" src={WhiteLabel} alt="" />
          <div>
            <h3>White Label Solution</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
