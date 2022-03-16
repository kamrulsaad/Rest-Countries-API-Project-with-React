import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [countries,setCountries] = useState([]);
  console.log(countries[0]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  return (
    <div className="App">
      {
        countries.map(country => <Countries name ={country.name.common} continent={country.subregion} population = {country.population} capital = {country.capital}>
        </Countries>)
      }
    </div>
  );
}

function Countries(props){
  return(
    <div className='Card'>
      <h3>{props.name}</h3>
      <div className='Para-texts'>
        <p>Region : {props.continent}</p>
        <p>Population : {props.population} </p>
        <p>Capital : {props.capital} </p>
      </div>
    </div>
  )
}

export default App;
