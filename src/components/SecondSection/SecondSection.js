import React from "react";
import "./SecondSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faHouse } from "@fortawesome/free-solid-svg-icons";
import playerPhoto from "../../accets/secondSectionPhoto/playerPhoto.webp";

const SecondSection = () => {
  return (
    <div>
      <div className="secondSection_text_div">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nemo
          quaerat dolore corrupti alias eum maiores suscipit exercitationem
          molestiae.
        </h1>
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="player_div">
        <div className="player_img_div">
          <img className="playerPhoto" src={playerPhoto} alt="" />
          <div>
            <FontAwesomeIcon className="faCirclePlay" icon={faCirclePlay} />
            <h2 className="watch_promo">Watch Promo</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
