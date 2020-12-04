import './HouseTemplate.css'
import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import apartment from '../images/apartment.jpg'

console.log(apartment);


function HouseTemplate() {
    return (
        <>
            <h1>House Template</h1>
            <div>
                <Image src={apartment} thumbnail />
            </div>
        </>
    );
}

export default HouseTemplate;

