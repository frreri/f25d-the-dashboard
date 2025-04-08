'use strict';

export class Clock {
  #timeEl;
  #dateEl;
  #lastTime;
  #lastDate;
  #locale = navigator.language;

  constructor(timeEl, dateEl) {
    this.#timeEl = timeEl;
    this.#dateEl = dateEl;
  }

  init() {
    // run once first, so time displays directly, then every second
    this.#updateClock();
    setInterval(this.#updateClock.bind(this), 1000);
  }

  // function to only update textContent of elements if it has changed
  #updateText = (el, newText, oldText) => {
    if (newText === oldText) return;
    el.textContent = newText;
  };

  #updateClock = () => {
    const date = new Date();

    // Getting time string, then updating HTML element only if time has changed
    // uses browser's language/locale setting to display time (sv-SE would be 13:42, while en-US would be 01:42 pm for example)
    const timeString = date.toLocaleTimeString(this.#locale, {
      hour: '2-digit',
      minute: '2-digit',
    });
    this.#updateText(this.#timeEl, timeString, this.#lastTime);
    this.#lastTime = timeString;

    // Getting date string, then updating HTML element only if date has changed
    // just like with time, this uses browser's language/locale to show date format
    const dateString = date.toLocaleDateString(this.#locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    this.#updateText(this.#dateEl, dateString, this.#lastDate);
    this.#lastDate = dateString;
  };
}
