'use strict';

export const setupNotes = textArea => {
  let text = localStorage.getItem('notes');
  if (text) textArea.value = text;

  textArea.addEventListener('keyup', () => {
    text = textArea.value.trim();
    localStorage.setItem('notes', text);
  });
};
