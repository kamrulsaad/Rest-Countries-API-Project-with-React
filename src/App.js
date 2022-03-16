import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [countries,setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  return (
    <div className="App">
      {
        countries.map(country => <Countries name ={country.name.common} continent={country.subregion}>
        </Countries>)
      }
    </div>
  );
}

function Countries(props){
  return(
    <div className='Card'>
      <p>Name : {props.name}</p>
      <p>Continent : {props.continent}</p>
    </div>
  )
}

export default App;
