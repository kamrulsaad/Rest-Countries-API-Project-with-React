import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
  const {name, region, population, flags, capital} = props.country;
    return (
        <div className='Card'>
            <img src={flags.png} alt="" />
            <div className="Text">
                <h3>{name.common}</h3>
                <p><small> <span>Population:</span>  {population} </small></p>
                <p><small> <span>Continent:</span> {region} </small></p>
                <p><small> <span>Capital: </span> {capital} </small></p>
            </div>
        </div>
    );
};

export default Country;