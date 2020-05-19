import React from "react";


const CarouselCard = (props) => {
  
  
  return (
   
    <div className="animate">
      <div className="title">
        <span className="name">{props.currentCard.name}</span>
        <span className="date">{props.currentCard.date}</span>
      </div>
      <div className="content">{props.currentCard.review}</div>
    </div>
  );
};

export default CarouselCard;
