import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
  const {name, region, population, cca3, flags} = props.country;
    return (
        <div className='Card'>
            <img src={flags.png} alt="" />
            <div className="Text">
                <h3>{name.common}</h3>
                <p><small> Population: {population} </small></p>
                <p><small> Continent: {region} </small></p>
                <p><small>{cca3}</small></p>
            </div>
        </div>
    );
};

export default Country;