import React from "react";
import Carousel from "./Carousel";

const CarouselCard = (props) => {
  
  
  return (
   
    <div className="animate">
      <div className="title">
        <span>{props.currentCard.name}</span>
        <span>{props.currentCard.date}</span>
      </div>
      <div className="content">{props.currentCard.review}</div>
    </div>
  );
};

export default CarouselCard;
