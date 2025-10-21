import React from "react";
import "./PortfolioCart.css";
import portfolioPhotoOne from "../../accets/portfolioPhoto/portfolioPhotoOne.png";
import { Link } from "react-router-dom";

const PortfolioCart = () => {
  return (
    <div className="portfolioCart_parent_div">
      <h1>Portfolio</h1>
      <div className="portfolioCart_flex_div">
        <div className="portfolioCart_leftSide_div">
          <img
            className="portfolioCart_leftSide_img"
            src={portfolioPhotoOne}
            alt=""
          />
          <h1>Website Development</h1>
          <span>2023-08-14</span>
          <p>test</p>
          <Link to="/home">
            <button className="back_btn">Back to Home</button>
          </Link>
        </div>
        <div className="portfolioCart_rightSide_div">
          <img
            className="portfolioCart_rightSide_img"
            src={portfolioPhotoOne}
            alt=""
          />
          <div className="portfolioCart_rightSide_text_div">
            <h4>Website Development</h4>
            <span>Jan 01, 1970</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCart;
