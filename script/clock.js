'use strict';

export const setupClock = (timeEl, dateEl) => {
  const locale = navigator.language;
  let lastTime;
  let lastDate;

  const updateText = (el, newText, oldText) => {
    if (newText === oldText) return;
    el.textContent = newText;
  };

  const updateClock = () => {
    const date = new Date();

    // Getting time string, then updating HTML element only if time has changed
    // uses browser's language/locale setting to display time (sv-SE would be 13:42, while en-US would be 01:42 pm for example)
    const timeString = date.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });
    updateText(timeEl, timeString, lastTime);
    lastTime = timeString;

    // Getting date string, then updating HTML element only if date has changed
    // just like with time, this uses browser's language/locale to show date format
    const dateString = date.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    updateText(dateEl, dateString, lastDate);
    lastDate = dateString;
  };

  // run once first, so time displays directly as interval will run first after 1 sec
  updateClock();
  setInterval(updateClock, 1000);
};
