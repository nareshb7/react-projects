import React from 'react'
import './styles.scss'
import Search from './components/Search'
import WeatherDisplay from './components/WeatherDisplay'
import useWeather from './hooks';

const Weather = () => {
    const { cityData, errorMessage, city, handleChange, handleSearch } =
    useWeather();
  return (
    <div className='weather-app w-50 text-center'>
        <h3>Weather</h3>
        <Search handleChange={handleChange} handleSearch={handleSearch} city={city} />
        <WeatherDisplay cityData={cityData} errorMessage={errorMessage} />
    </div>
  )
}

export default Weather