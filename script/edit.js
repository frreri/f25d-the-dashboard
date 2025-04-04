'use strict';

export const makeEditable = (fieldName, fieldEl) => {
  const savedText = localStorage.getItem(fieldName);
  if (savedText) fieldEl.textContent = savedText;
  fieldEl.contentEditable = 'true';

  const saveTextContent = () => {
    let text = fieldEl.textContent.trim();
    // If text is empty i set it back to Change me!
    if (!text) {
      text = 'Change me!';
      fieldEl.textContent = text;
    }
    localStorage.setItem(fieldName, text);
  };

  // save text when the field/element loses focus
  fieldEl.addEventListener('blur', saveTextContent);
};
