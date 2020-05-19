import React from 'react';

const Hero = () => {
    return (
        <div className="hero-container">
            <h1 className="hero-title-1">WELCOME TO</h1>
            <div className="hero-title-2">Rooster Grin</div>
            <button className="hero-button" onClick={() => window.open('https://www.roostergrin.com/')}>Button Button</button>
        </div>
    )
}


export default Hero;