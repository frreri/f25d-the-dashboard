'use strict';

export const editHeading = (fieldName, fieldEl) => {
  // Get and display saved text
  const savedText = localStorage.getItem(fieldName);
  if (savedText) fieldEl.textContent = savedText;
  // sets the element to editable with html property contenteditable
  fieldEl.contentEditable = 'true';

  const saveTextContent = () => {
    let text = fieldEl.textContent.trim();
    // If text is empty save it as Change me!
    if (!text) {
      text = 'Change me!';
    }
    localStorage.setItem(fieldName, text);
  };

  // save text as the user types
  fieldEl.addEventListener('keyup', saveTextContent);
};

export const editNotes = textArea => {
  // get and display saved text
  let text = localStorage.getItem('notes');
  if (text) textArea.value = text;

  // save text as user types
  textArea.addEventListener('keyup', () => {
    text = textArea.value.trim();
    localStorage.setItem('notes', text);
  });
};
