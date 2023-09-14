const OPEN_WEATHER_API_KEY = "1e0c155d064d2845020ccc99180d5c08";

export interface OpenWeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    max_temp: number;
    min_temp: number;
  };
  weather: {
    description: string;
    main: string;
    icon: string;
    id: number;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

export const fetchOpenWeatherData = async (
  city: string,
  tempScale: OpenWeatherTempScale
): Promise<OpenWeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=${tempScale}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data: OpenWeatherData = await res.json();
  return data;
};

export type OpenWeatherTempScale = "metric" | "imperial";
