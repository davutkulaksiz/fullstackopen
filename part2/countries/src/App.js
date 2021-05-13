import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';
import axios from 'axios';

const App = () =>
{
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(undefined);
  const [weather, setWeather] = useState(undefined);
  const [newSearch, setNewSearch] = useState('');

  const showCountry = (country) =>
  {
    setCountry(country);

    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
      .then(response =>
        {
          console.log(response.data)
            setWeather(response.data);
        })

  }

  useEffect(() =>
  {
    console.log('effect');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response =>
        {
          console.log('promise fulfilled');
          setCountries(response.data);
        });
  }, []);

  const handleSearchChange = (event) =>
  {
    console.log(event.target.value);
    // if button is clicked, we don't want to show two countries at the same time
    setCountry(null)
    setNewSearch(event.target.value);
  }

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(newSearch.toLowerCase()));

  return (
    <div>
      <Filter newSearch = {newSearch} handleSearchChange = {handleSearchChange}/>
      <Countries filteredCountries = {filteredCountries} showCountry = {showCountry} weather = {weather}/>
      <Country country = {country} weather = {weather}/>
    </div>
  );
};

export default App