import React from 'react'
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>JT</h1>
            <nav>
                <ul>
                    <li className="nav-button"><a href="#about-me">About Me</a></li>
                    <li className="nav-button"><a href="/">Contact</a></li>
                    <li ><a href="/">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar