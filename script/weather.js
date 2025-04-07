'use strict';

// weatherIcons is a map with weather code string as key
import { weatherIcons } from '../data/weatherIcons.js';

// API URL https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max&timezone=Europe%2FBerlin&forecast_days=3

export const setupWeather = () => {
  console.log(weatherIcons.get('0'));
};
