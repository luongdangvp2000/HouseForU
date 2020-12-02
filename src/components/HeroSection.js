import React, { Component } from 'react'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-child">
                <h1 className="introduce">Welcome</h1>
                <p className="introduce">Let's rent a house for you</p>
                <form className="form-inline my-2 my-lg-0" id="search-bar">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default HeroSection; 