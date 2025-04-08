'use strict';

// weatherIcons is a map with weather code string as key
import { weatherIcons } from '../data/weatherIcons.js';
import { getJSON } from './jsonFetcher.js';

const weatherContainer = document.getElementById('weather');

// Array for translating day number from Date() to name
const dayNames = [
  'Söndag',
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
];

export const setupWeather = async () => {
  let lat;
  let long;
  // Get position using browser's built in geolocation api
  navigator.geolocation.getCurrentPosition(
    // success callback, will handle weather with users position
    pos => {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
      handleWeather(lat, long);
    },
    // failure callback, if user declines positioning, I handle weather with predefined cords from central Sweden
    () => {
      lat = 60.08;
      long = 14.63;
      handleWeather(lat, long);
    }
  );
};

const handleWeather = async (lat, long) => {
  // Getting weather data with lat long from above setupWeather function
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max&timezone=Europe%2FBerlin&forecast_days=3`;
  try {
    let weatherData = await getJSON(url);
    weatherData = weatherData.daily;

    // Creating and inserting html for today, tomorrow and they day after
    weatherData.weather_code.forEach((code, index) => {
      let day = 'Idag';
      if (index === 1) day = 'Imorgon';
      if (index === 2) {
        day = dayNames[new Date(weatherData.time[index]).getDay()];
      }
      const weatherIcon = weatherIcons.get(String(code));

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('weather-day');

      dayDiv.innerHTML = `
      <img src="${weatherIcon.image}" alt="${weatherIcon.description}">
      <div>
        <h3>${day}</h3>
        <span>${weatherIcon.description}</span>
      </div>
      <span class="weather-degrees">${weatherData.temperature_2m_max[index]}°C</span>
    `;
      weatherContainer.append(dayDiv);
    });
  } catch (err) {
    alert(`💥 Error getting weather: ${err.message} 💥`);
    console.error(err);
  }
};
