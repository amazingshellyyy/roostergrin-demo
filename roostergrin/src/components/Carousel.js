import React from "react";
import {ReactComponent as ArrowLeft } from '../assets/images/arrow-left.svg';
import {ReactComponent as ArrowRight } from '../assets/images/arrow-right.svg';
import CarouselCard from './CarouselCard';

const data = [
  {
    name: "John Doe1",
    date: "08/08/2019",
    review:
      "111111Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
  },
  {
    name: "John Doe2",
    date: "08/08/2019",
    review:
      "222222Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
  },
  {
    name: "John Doe3",
    date: "08/08/2019",
    review:
      "333333Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
  },
];
class Carousel extends React.Component {
  state = {
    currentIndex: 0,
    counter:0,
  }

  prev = () => {
    
    const newCounter = this.state.counter-1;
    
    const newCurrentIndex = newCounter%3;
    
    this.setState({
      counter: newCounter,
      currentIndex: newCurrentIndex
    })
    if (newCurrentIndex == 0) {
      this.setState({
        leftShow:false
      })
    }else {
      this.setState({
        leftShow:true
      })
    }
    if (newCurrentIndex == 2) {
      this.setState({
        rightShow: false
      })
    } else {
      this.setState({
        rightShow: true
      })
    }
  }
  next = () => {
    
    const newCounter = this.state.counter +1;
    
    const newCurrentIndex = newCounter%3;
   
    this.setState({
      counter: newCounter,
      currentIndex: newCurrentIndex
    })
    if (newCurrentIndex == 0) {
      this.setState({
        leftShow:false
      })
    } else {
      this.setState({
        leftShow:true
      })
    }
    if (newCurrentIndex == 2) {
      this.setState({
        rightShow: false
      })
    } else {
      this.setState({
        rightShow: true
      })
    }
  }

  renderCard = () => {
    return <CarouselCard currentCard={data[this.state.currentIndex]}/>
  }

  render() {
    return (
      <div className="container carousel-container">
        <div className="row holder">
          <span id="left" onClick={this.prev} className="arrow">
            <ArrowLeft/>
          </span>
          <span className="">
            {this.renderCard()}
            <div className="dots">
            <i className={this.state.currentIndex == 0 ? "fa fa-circle active": "fa fa-circle"}></i>
            <i className={this.state.currentIndex == 1 ? "fa fa-circle active": "fa fa-circle"}></i>
            <i className={this.state.currentIndex == 2 ? "fa fa-circle active": "fa fa-circle"}></i>
            </div>
           
          </span>
          <span id="right" onClick={this.next} className="arrow">
          <ArrowRight/>
          </span>
        </div>
      </div>
    );
  }
}

export default Carousel;
