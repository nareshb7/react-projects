export interface WeatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface SysType {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDataResponse {
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: WeatherType[];
  base: string;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: SysType;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherCardProps {
    weatherData: WeatherDataResponse;
  }
  export interface SearchProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    city: string
}
export interface WeatherDisplayProps {
  cityData: WeatherDataResponse;
  errorMessage: string;
}
