import React from "react";

class Nav extends React.Component {
    state = {
        visibility: 'hidden',
        opacity: 0
    }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
     
    if (window.pageYOffset > 80) {
        this.setState({
           visibility: 'visible',
           opacity: 1
        });
    } else {
        this.setState({
            visibility: 'hidden',
            opacity: 0
        });
    }
    
   
}

  render() {
    return (
      <div>
        <div className="container nav">
          <img alt="white logo of roostergrin"
            className="nav-logo"
            src={require("./../assets/images/logo-white.svg")}
          ></img>
        </div>
        <div className="nav-fix" style={{visibility:this.state.visibility,opacity:this.state.opacity}}>
          <img alt="color logo of roostergrin"
            className="nav2-logo"
            src={require("./../assets/images/logo-color.svg")}
          ></img>
        </div>
      </div>
    );
  }
}

export default Nav;
