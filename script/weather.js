'use strict';

// weatherIcons is a map with weather code string as key
import { weatherIcons } from '../data/weatherIcons.js';
import { getJSON } from './jsonFetcher.js';

export class WeatherMachine {
  #weatherContainer;
  #dayNames;
  #apiUrl;
  #lat;
  #long;
  #weatherData;

  constructor(weatherContainer, dayNames) {
    this.#weatherContainer = weatherContainer;
    this.#dayNames = dayNames;
  }

  async run() {
    try {
      const pos = await this.#getPosition();
      this.#lat = pos.coords.latitude;
      this.#long = pos.coords.longitude;
    } catch (err) {
      console.log(err);
      this.#lat = 60.08;
      this.#long = 14.63;
    }
    this.#setUrl();
    await this.#getWeatherData();
    this.#displayWeather();
  }

  #getPosition() {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  #setUrl() {
    this.#apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${
      this.#lat
    }&longitude=${
      this.#long
    }&daily=weather_code,temperature_2m_max&timezone=Europe%2FBerlin&forecast_days=3`;
  }

  async #getWeatherData() {
    try {
      const data = await getJSON(this.#apiUrl);
      this.#weatherData = data.daily;
    } catch (err) {
      alert(`💥 Error getting weather: ${err.message} 💥`);
      console.error(err);
    }
  }

  #displayWeather() {
    this.#weatherData.weather_code.forEach((code, index) => {
      let day = this.#getDayName(index);
      const weatherIcon = weatherIcons.get(String(code));

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('weather-day');

      dayDiv.innerHTML = `
      <img src="${weatherIcon.image}" alt="${weatherIcon.description}">
      <div>
        <h3>${day}</h3>
        <span>${weatherIcon.description}</span>
      </div>
      <span class="weather-degrees">${
        this.#weatherData.temperature_2m_max[index]
      }°C</span>
    `;
      this.#weatherContainer.append(dayDiv);
    });
  }

  #getDayName(index) {
    let day = 'Idag';
    if (index === 1) day = 'Imorgon';
    if (index === 2) {
      day = this.#dayNames[new Date(this.#weatherData.time[index]).getDay()];
    }
    return day;
  }
}
