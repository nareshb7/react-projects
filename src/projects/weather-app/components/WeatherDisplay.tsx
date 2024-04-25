import React from "react";
import WeatherCard from "./WeatherCard";
import { WeatherDisplayProps } from "../modals";
import { isEmptyObject } from "utils/util";

const WeatherDisplay = ({ cityData, errorMessage }: WeatherDisplayProps) => {
  return (
    <div className="border border-rounded m-2">
      {errorMessage ? (
        <div className="font-bold">{errorMessage}</div>
      ) : (
        <>
          {isEmptyObject(cityData) ? (
            <div>Search any city name</div>
          ) : (
            <WeatherCard weatherData={cityData} />
          )}
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
