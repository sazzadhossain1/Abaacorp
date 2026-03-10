import React from "react";
import "./SecondSection.css";
import playerPhoto from "../../accets/secondSectionPhoto/playerPhoto.webp";

const SecondSection = () => {
  return (
    <div className="secondSection_parent_div">
      <div className="secondSection_text_div"></div>

      <div className="player_div">
        <div className="player_img_div">
          <img className="playerPhoto" src={playerPhoto} alt="player" />

          <div className="text_overlay">
            <h2 className="top_quality">
              Best Service at a Very Affordable Rate
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
