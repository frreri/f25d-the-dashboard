'use strict';

import { setupClock } from './clock.js';
import { setupLinks } from './links.js';
import { setupWeather } from './weather.js';
import { setupBackground } from './background.js';
import { editHeading, editNotes } from './edit.js';

const time = document.getElementById('time');
const date = document.getElementById('date');
const notes = document.getElementById('notes');
const heading = document.getElementById('heading');

setupClock(time, date);
setupLinks();
setupWeather();
setupBackground();

editNotes(notes);
editHeading('dashH1', heading);
