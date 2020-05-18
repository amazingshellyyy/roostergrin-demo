import React from "react";
import Carousel from './Carousel';


const Section5 = () => {
  return (
    <div className="section">
      <div className="row section5-container">
        <div className="col-sm">
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
        <div className="col-sm">
        <Carousel/>
        </div>
      </div>
    </div>
  );
};

export default Section5;
