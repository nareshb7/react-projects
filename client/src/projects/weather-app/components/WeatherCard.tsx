import React from "react";
import { WeatherCardProps } from "./modals";

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  const { name, weather, main, wind, sys } = weatherData;

  return (
    <div>
      <h2>Weather in {name}</h2>
      {weather.map(({ id, main, description, icon }) => (
        <div key={id}>
          <p>Main: {main}</p>
          <p>Description: {description}</p>
          <p className="weather-icon flex justify-center items-center">
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
            />
          </p>
        </div>
      ))}
      <p>Temperature: {main.temp}°C</p>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Country: {sys.country}</p>
      <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
};

export default WeatherCard;
