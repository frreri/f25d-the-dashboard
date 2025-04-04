'use strict';

export const setupNotes = textArea => {
  // get and display saved text
  let text = localStorage.getItem('notes');
  if (text) textArea.value = text;

  // save text as user types
  textArea.addEventListener('keyup', () => {
    text = textArea.value.trim();
    localStorage.setItem('notes', text);
  });
};
