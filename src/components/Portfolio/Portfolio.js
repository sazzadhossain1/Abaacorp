import React from "react";
import "./Portfolio.css";
import portfolioPhotoOne from "../../accets/portfolioPhoto/portfolioPhotoOne.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio_parent_div">
      <h1>Portfolio</h1>
      <div className="portfolio_home_cart_div">
        <img src={portfolioPhotoOne} alt="" />
        <h3>Website Development</h3>
        <p>Test</p>
        <Link to="/portfolioCart">
          <button className="portfolio_home_seeMore_btn">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
