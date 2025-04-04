'use strict';

import { setupClock } from './clock.js';
import { setupNotes } from './notes.js';
import { makeEditable } from './edit.js';

const time = document.getElementById('time');
const date = document.getElementById('date');
const notes = document.getElementById('notes');
const heading = document.getElementById('heading');

setupClock(time, date);
setupNotes(notes);
makeEditable('dashH1', heading);
