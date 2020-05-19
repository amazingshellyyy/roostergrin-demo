import React from "react";
import Carousel from './Carousel';


const Section5 = () => {
  return (
    <div className="container section">
      <div className="row section5-container">
        <div className="col-md-12 col-lg-6">
          <div className="sec5-info">
            <div className="header">Lorem ipsum dolor sit amet</div>
            <div className="stars">
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
        <Carousel/>
        </div>
      </div>
    </div>
  );
};

export default Section5;
