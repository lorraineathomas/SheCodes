import react, { useState } from "react";
import axios from "axios";

export default function Weather() {
    const [ city, setCity ] = useState(null);
    const [ results, setResults ] = useState({ready: false});

    function handleResponse(response) {
        setResults({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description
        });
    }

    function displayWeather(event) {
        event.preventDefault();
        const key = "082d3d02ffdb12f2fd9b259e2ced1d0d-w";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        axios.get(url).then(handleResponse);

    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={displayWeather}>
            <input
            type="search"
            placeholder="Enter a city name"
            onChange={handleChange}
            />
            <button type="Submit">Search</button>
        </form>
    );

    if(results.ready) {
        return (
            <div>
                <h1>Weather Search</h1>
                {form}
                <ul>
                    <li>Temperature: {Math.round(results.temperature)}°C</li>
                    <li>Description: {results.description}</li>
                    <li>Humidity: {results.humidity}%</li>
                    <li>Wind: {results.wind}km/h</li>
                    <li>
                        <img src={results.icon} alt={results.description} />
                    </li>
                </ul>
            </div>
        );
    } else {
        return form;
    }
}