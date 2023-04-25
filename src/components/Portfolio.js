import React from "react";
import "../css/portfolio.css";
import pic1 from "../images/london.jpg";
import pic2 from "../images/mountain.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio_main">
        <div className="portfolio_heading">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio_inner">
          <div className="portfolio_inner_card">
            <img src={pic1} alt="pic1" />
            <p>Portraits</p>
          </div>
          
          <div className="portfolio_inner_card">
            <img src={pic2} alt="pic2" />
            <p>Landscapes</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Portfolio;
