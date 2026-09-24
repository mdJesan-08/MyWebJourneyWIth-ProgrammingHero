import React from 'react';
import { use } from 'react';
import Country from './Country';
import "./Country.css"
import { useState } from 'react';
const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    const [visitedCountry,setVisitedCountry] = useState([]);
    
    const handleVisited = (country) => {
        console.log("handle Visited Clicked",country);
        setVisitedCountry([...visitedCountry, country]); // 👈 spread old + add new
        console.log(visitedCountry);

        // console.log(visitedCountry);
        
      }

      let visitedLength = visitedCountry.length;
    
    
    return (
        <div >
           <h2>In the Countries</h2>
           <h2>Visited Country : {visitedLength}</h2>

            <div className='main-blog'>
                {
                    countries.map( (country) => <Country key={country.ccn3.ccn3} country = {country} handleVisited = {handleVisited}>

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;