import React, { useState } from "react";
import { WEATHER_API_KEY } from "utils/Constants";
import { WeatherDataResponse } from "./modals";
import { initialCityData } from "./helper";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] =
    useState<WeatherDataResponse>(initialCityData);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeatherByCity = async (city: string) => {
    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      const data = await response.json();
      setCityData(data);
      setLoading(false);
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCity(value);
  };
  const handleSearch = () => {
    setErrorMessage("");
    fetchWeatherByCity(city);
  };

  return {
    handleChange,
    handleSearch,
    loading,
    cityData,
    city,
    errorMessage,
  };
};

export default useWeather;
