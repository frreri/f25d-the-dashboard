'use strict';

import { Clock } from './clock.js';
import { Chuck } from './chuck.js';
import { setupLinks } from './links.js';
import { setupWeather } from './weather.js';
import { setupBackground } from './background.js';
import { editHeading, editNotes } from './edit.js';

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const notes = document.getElementById('notes');
const heading = document.getElementById('heading');
const jokeContainer = document.getElementById('joke-container');
const jokeBtn = document.getElementById('joke-btn');

const clock = new Clock(timeEl, dateEl);
clock.init();

const chuck = new Chuck(
  'https://api.chucknorris.io/jokes/random?category=dev',
  jokeContainer,
  jokeBtn
);
chuck.init();

setupLinks();
setupWeather();
setupBackground();

editNotes(notes);
editHeading('dashH1', heading);
