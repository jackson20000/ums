import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css'


function Header() {
    // componentDidMount() {
    //     var elem = document.querySelector(".sidenav");
    //     var instance = M.Sidenav.init(elem, {
    //         edge: "left",
    //         inDuration: 250
    //     });
    // }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/home'} className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/logout'}>Logout</Link></li>
                </ul>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </nav>
    )
}

export default Header;