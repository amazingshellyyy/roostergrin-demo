import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={process.env.PUBLIC_URL + '/img/logo-white.svg'}></img>
        </nav>
    )
}

export default Nav;