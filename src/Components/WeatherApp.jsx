import React, { useState } from "react";

const WeatherApp = () => {
    const [city, setCity] = useState(""); // State to store the city input
    const [weatherData, setWeatherData] = useState(null); // State to store weather data

    const API_KEY = "b04c3ea901fb74ced04d5fa2955fc36c"; // Replace with your OpenWeatherMap API key
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // OpenWeatherMap base URL

    // Function to fetch weather data
    const fetchWeather = async () => {
        if (!city) return; // If no city entered, do nothing

        // Construct the API URL with the query parameters
        const result = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        // Parse the JSON data from the response
        const data = await result.json();

        // Update the state with the fetched weather data
        setWeatherData(data);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Weather App</h1>
            {/* Input field for the city name */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Update city state on input change
                    style={{
                        padding: "10px",
                        marginRight: "10px",
                        width: "200px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <button
                    onClick={fetchWeather} // Fetch weather when the button is clicked
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </div>

            {/* Display weather data if available */}
            {weatherData && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        display: "inline-block",
                        textAlign: "left",
                    }}
                >
                    <h2>{weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt={weatherData.weather[0].description}
                        style={{ width: "50px", height: "50px" }}
                    />
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
