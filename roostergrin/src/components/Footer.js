import React from "react";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="social-title">Follow Us:</div>
        <div className="social-icons">
          <Instagram onClick={() => window.open('https://www.roostergrin.com/')}/>
          <Facebook onClick={() => window.open('https://www.roostergrin.com/')}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
