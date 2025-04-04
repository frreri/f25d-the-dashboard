'use strict';

const form = document.getElementById('link-form');
const nameInput = document.getElementById('link-name');
const urlInput = document.getElementById('link-url');
const linkContainer = document.getElementById('links');

const links = [];
const linkObj = (linkName, linkUrl) => ({
  name: linkName,
  url: linkUrl,
  favicon: `https://s2.googleusercontent.com/s2/favicons?domain_url=${linkUrl}&sz=32`,
});

///////////////////////////////////////////////////
// TESTING SETTING STORAGE HERE FOR DESIGNING UI //
//////// FIXME REMOVE WHEN DONE FIXME /////////////
localStorage.setItem(
  'links',
  JSON.stringify([
    linkObj('Google', 'https://www.google.se'),
    linkObj('Youtube', 'https://youtube.com'),
    linkObj('Udemy', 'https://www.udemy.com/home/my-courses/learning/'),
  ])
);
/////////////////////////////////////////////////

const setupLinks = () => {
  // Checking if there are saved links and pushes them to links array if there are
  const savedLinks = localStorage.getItem('links');
  if (savedLinks) JSON.parse(savedLinks).forEach(link => links.push(link));

  if (links.length > 0) displayLinks(links);
};

const displayLinks = linkArr => {
  linkContainer.innerHTML = '';
  linkArr.forEach(link => {
    const linkEl = document.createElement('a');
    linkEl.href = link.url;
    linkEl.target = '_blank';
    linkEl.classList.add('link');
    linkEl.innerHTML = `
      <img src="${link.favicon}" alt="favicon">
      <p>${link.name}</p>
    `;
    linkContainer.append(linkEl);
  });
};

export { setupLinks };

// TODO ADD BUTTON FOR ADDING LINKS WHICH REVEALS THE FORM TO ADD LINKS AND HIDES THE BUTTON
// FORM SHOULD CREATE LINK, ADD TO ARRAY AND SAVE IT STRINGIFIED THEN CALL DISPLAY LINKS, HIDE ITSELF AND SHOW BUTTON AGAIN
// ADD POSSIBILITY TO REMOVE LINKS, AND STYLE THEM BETTER
