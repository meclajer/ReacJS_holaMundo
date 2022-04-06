import React from "react";

import './style.css';
import imgNort from '../images/NorthernHemisphere.jpg';
import imgSourt from '../images/SouthernHemisphere.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'Es el emisferio norte',
        picture: imgNort
    },
    Southern: {
        text: 'Es el emisferio sur',
        picture: imgSourt
    },
}

const HemisphereDisplay = ({latitud}) => {
    
    const hemisphere = latitud > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <h1>{text}</h1>
            <img src={picture} alt="Hemisphere"/>
        </div>
    )
    
    
}

export default HemisphereDisplay;