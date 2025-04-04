'use strict';

export const makeEditable = (fieldName, fieldEl) => {
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
