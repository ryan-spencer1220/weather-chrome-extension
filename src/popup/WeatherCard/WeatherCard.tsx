import React, { useState, useEffect } from "react";
import { fetchOpenWeatherData, OpenWeatherData } from "../../utils/api";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCardContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

type WeatherCardState = "loading" | "error" | "success";

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData>();
  const [cardState, setCardState] = useState<WeatherCardState>("loading");

  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setCardState("success");
      })
      .catch((err) => {
        console.error(err);
        setCardState("error");
      });
  }, [city]);

  if (cardState === "loading" || cardState === "error") {
    return (
      <WeatherCardContainer>
        <Typography variant="body1">
          {cardState === "loading"
            ? "Loading..."
            : "Error: could not retrieve weather data for this city"}
        </Typography>
      </WeatherCardContainer>
    );
  }

  return (
    <WeatherCardContainer>
      <Typography variant="h5">{city}</Typography>
      <Typography variant="body1">
        {Math.round(weatherData.main.temp)}
      </Typography>
      <Typography variant="body1">
        Feels Like: {Math.round(weatherData.main.feels_like)}
      </Typography>
    </WeatherCardContainer>
  );
};

export default WeatherCard;