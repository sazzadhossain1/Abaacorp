import React from "react";
import "./Portfolio.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import portfolioOne from "../../accets/portfolioPhoto/firstSectionPhoto1.png";
import portfolioTwo from "../../accets/portfolioPhoto/firstSectionPhoto2.png";
import portfolioThree from "../../accets/portfolioPhoto/firstSectionPhoto3.png";
import portfolioFour from "../../accets/portfolioPhoto/firstSectionPhoto4.png";
import portfolioFive from "../../accets/portfolioPhoto/firstSectionPhoto5.png";
import portfolioSix from "../../accets/portfolioPhoto/firstSectionPhoto6.png";
import portfolioSaven from "../../accets/portfolioPhoto/firstSectionPhoto7.png";

import one from "../../accets/portfolioPhoto/New folder/1.jpg";
import two from "../../accets/portfolioPhoto/New folder/2.jpg";
import three from "../../accets/portfolioPhoto/New folder/3.jpg";
import four from "../../accets/portfolioPhoto/New folder/4.jpg";
import five from "../../accets/portfolioPhoto/New folder/5.jpg";
import six from "../../accets/portfolioPhoto/New folder/6.jpg";
import saven from "../../accets/portfolioPhoto/New folder/7.jpg";
import eight from "../../accets/portfolioPhoto/New folder/8.jpg";
import nine from "../../accets/portfolioPhoto/New folder/9.png";
import ten from "../../accets/portfolioPhoto/New folder/10.png";
import elaven from "../../accets/portfolioPhoto/New folder/11.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="portfolio_main_div">
        <h1>Portfolio</h1>
        {/* <Carousel responsive={responsive}>
          <div>
            <img className="portfolio_img" src={portfolioOne} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={portfolioTwo} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={portfolioThree} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={portfolioFour} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={portfolioFive} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={portfolioSix} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={portfolioSaven} alt="" />
          </div>
          
          <div>
            <img className="portfolio_img" src={one} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={two} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={three} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={four} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={five} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={six} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={saven} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={eight} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={nine} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={ten} alt="" />
          </div>
          <div>
            <img className="portfolio_img" src={elaven} alt="" />
          </div>
         
        </Carousel> */}
        <br />
        <br />
      </div>
      {/* <div className="portfolio_another_main_div">
        <Carousel responsive={responsive}>
          <div>
            <img className="portfolio_img_another" src={one} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={two} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={three} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={four} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={five} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={six} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={saven} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={eight} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={nine} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={ten} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={elaven} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={portfolioOne} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={portfolioTwo} alt="" />
          </div>
          <div>
            <img
              className="portfolio_img_another"
              src={portfolioThree}
              alt=""
            />
          </div>
          <div>
            <img className="portfolio_img_another" src={portfolioFour} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={portfolioFive} alt="" />
          </div>
          <div>
            <img className="portfolio_img_another" src={portfolioSix} alt="" />
          </div>
          <div>
            <img
              className="portfolio_img_another"
              src={portfolioSaven}
              alt=""
            />
          </div>
        </Carousel>
      </div> */}
      <div className="portfolio_grid_div">
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={four} alt="" />
        </div>
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={six} alt="" />
        </div>
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={saven} alt="" />
        </div>
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={one} alt="" />
        </div>
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={two} alt="" />
        </div>
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={three} alt="" />
        </div>

        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={eight} alt="" />
        </div>
        <div className="portfolio_cart_div">
          <img className="portfolio_Cart_Img" src={five} alt="" />
        </div>
      </div>
      <Link to="/portfolioInnerPage">
        <button className="portfolio_see_more_btn">See More</button>
      </Link>
    </div>
  );
};

export default Portfolio;
