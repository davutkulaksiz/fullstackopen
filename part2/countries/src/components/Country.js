import React from 'react';

const Country = ({country, weather}) =>
{
    return (
        <div>
            {country && (
                <div>
                    <h2>{country.name}</h2>
                    <div>
                        <div>capital {country.capital}</div>
                        <div>population {country.population}</div>
                    </div>

                    <h2>languages</h2>
                    <ul>
                        {country.languages.map(language =>
                            <li key={language.name}>
                                {language.name}
                            </li>)
                        }
                    </ul>

                    <img src={country.flag} alt={country.name} width="100"/>
                    {weather && (
                            <div>
                            <h2>Weather in {country.capital}</h2>

                            <div>
                                <b>temperature:</b> {weather.current.temperature}
                            </div>

                            <img src={weather.current.weather_icons[0]} alt={country.capital}
                            width="100"/>

                            <div>
                                <b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
                            </div>
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}


export default Country;