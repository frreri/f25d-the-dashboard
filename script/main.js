'use strict';

import { Clock } from './clock.js';
import { Chuck } from './chuck.js';
import { WeatherMachine } from './weather.js';
import { setupLinks } from './links.js';
import { setupBackground } from './background.js';
import { editHeading, editNotes } from './edit.js';

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const notes = document.getElementById('notes');
const heading = document.getElementById('heading');
const jokeContainer = document.getElementById('joke-container');
const jokeBtn = document.getElementById('joke-btn');
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

// ES6 class based modules
[
  new WeatherMachine(weatherContainer, dayNames),
  new Clock(timeEl, dateEl),
  new Chuck(jokeContainer, jokeBtn),
].forEach(module => module.run());

// Non class based modules
setupLinks();
setupBackground();
editNotes(notes);
editHeading('dashH1', heading);
