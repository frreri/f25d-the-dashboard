'use strict';

import { Clock } from './clock.js';
import { setupLinks } from './links.js';
import { setupWeather } from './weather.js';
import { setupBackground } from './background.js';
import { editHeading, editNotes } from './edit.js';

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const notes = document.getElementById('notes');
const heading = document.getElementById('heading');

const clock = new Clock(timeEl, dateEl);
clock.init();

setupLinks();
setupWeather();
setupBackground();

editNotes(notes);
editHeading('dashH1', heading);
