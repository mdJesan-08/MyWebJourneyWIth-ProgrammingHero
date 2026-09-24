import React from "react";
import './country.css';
import { useState } from "react";


const Country = ({country, handleVisited}) => {

    const [ visited, setVisited] = useState(false);

    const handleClick = () => {
        // console.log("ButtonCLicked");
        setVisited(!visited);
        // console.log(visited);
        handleVisited(country);
        
    }
    const src = country.flags.flags.png;
    return (
        <div className={`country ${visited ? 'country-visited':'country-not-visited'}`}>
            <div className="child"> Name :{country.name.common} </div>
            <img src={src} alt="" />
            <div> Area : {country.area.area}</div>
            <div> { country.area.area > 30000? "Big Country" : "Small Country"}</div>
            <button onClick={handleClick}> {visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;
