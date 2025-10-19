import React from "react";
import "./BlogCarts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const BlogCarts = ({ info }) => {
  const { img, title, text, date, button, id } = info;
  console.log(img, title);
  return (
    <div>
      <div className="blogCarts_parent_div">
        <img className="blogCarts_photo" src={img} alt="" />
        <h2>{title}</h2>
        <span>
          <FontAwesomeIcon className="faCalenderAlt" icon={faCalendarAlt} />
          {date}
        </span>
        <p>{text}</p>
        <button className="blogCarts_btn">
          <Link>{button}</Link>
        </button>
      </div>
    </div>
  );
};

export default BlogCarts;
