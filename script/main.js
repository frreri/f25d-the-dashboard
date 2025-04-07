'use strict';

import { setupClock } from './clock.js';
import { setupNotes } from './notes.js';
import { makeEditable } from './edit.js';
import { setupLinks } from './links.js';
import { setupWeather } from './weather.js';

const time = document.getElementById('time');
const date = document.getElementById('date');
const notes = document.getElementById('notes');
const heading = document.getElementById('heading');

setupClock(time, date);
setupNotes(notes);
setupWeather();
setupLinks();

makeEditable('dashH1', heading);
