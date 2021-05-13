import React from 'react';
import Country from './Country';


const Countries = ({filteredCountries, showCountry, weather}) =>
{
    return(
        <div>
            {filteredCountries.length >= 10 && <div>Too many matches, specify another filter</div>}
            {filteredCountries.length !== 1 && filteredCountries.length < 10 && filteredCountries.map(country =>
                <div key={country.name}>
                    {country.name} 
                    <button type="button"
                    onClick={() => showCountry(country)}>show
                    </button>
                </div>
            )}
            {filteredCountries.length === 1 && 
            <Country country = {filteredCountries[0]} weather={weather}/>
            }
        </div>
    );
}

export default Countries;