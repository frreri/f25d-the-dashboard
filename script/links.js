'use strict';

const form = document.getElementById('link-form');
const nameInput = document.getElementById('link-name');
const urlInput = document.getElementById('link-url');
const linkContainer = document.getElementById('links');
const linkBtn = document.getElementById('link-btn');

const links = [];
const linkObj = (linkName, linkUrl) => ({
  name: linkName,
  url: linkUrl,
  favicon: `https://s2.googleusercontent.com/s2/favicons?domain_url=${linkUrl}&sz=32`,
});

const saveLinks = () => localStorage.setItem('links', JSON.stringify(links));
const getLinks = () => localStorage.getItem('links');

const setupLinks = () => {
  // Checking if there are saved links and pushes them to links array if there are
  const savedLinks = getLinks();
  if (savedLinks) JSON.parse(savedLinks).forEach(link => links.push(link));

  if (links.length > 0) displayLinks(links);

  linkContainer.addEventListener('click', removeLink);
  linkBtn.addEventListener('click', toggleForm);
  form.addEventListener('submit', addLink);
};

const displayLinks = linkArr => {
  linkContainer.innerHTML = '';
  linkArr.forEach((link, index) => {
    const linkEl = document.createElement('div');
    linkEl.dataset.index = index;
    linkEl.classList.add('link');
    linkEl.innerHTML = `
      <a class="link-tag" href="${link.url}" target="_blank">
        <img src="${link.favicon}" alt="favicon">
        <p>${link.name}</p>
      </a>
      <div class="remove-link-div">
      <button id="remove-btn" class="remove-link-btn" title="Remove"><i class="fa-regular fa-square-minus"></i></button>
      </div>
    `;
    linkContainer.append(linkEl);
  });
};

const toggleForm = () => {
  form.classList.toggle('hidden');
  if (!form.classList.contains('hidden')) nameInput.focus();
  linkBtn.classList.toggle('hidden');
};

const addLink = e => {
  e.preventDefault();
  // If both fields are empty, close form
  if (!nameInput.value && !urlInput.value) {
    toggleForm();
    return;
  }
  // If both fields have values, add link, else show message that both fields need a value
  if (nameInput.value && urlInput.value) {
    let linkUrl = urlInput.value.toLowerCase();
    linkUrl = linkUrl.startsWith('https://') ? linkUrl : 'https://' + linkUrl;

    links.push(linkObj(nameInput.value, linkUrl));
    saveLinks();
    displayLinks(links);
    nameInput.value = '';
    urlInput.value = '';
    toggleForm();
  } else {
    alert('Du måste ange både namn och adress (URL)');
  }
};

const removeLink = e => {
  if (e.target.closest('.remove-link-btn')) {
    // prevent default to not go to the link if the click was on the remove button
    e.preventDefault();
    const linkIndex = Number(e.target.closest('.link').dataset.index);
    links.splice(linkIndex, 1);
    saveLinks();
    displayLinks(links);
  }
};

export { setupLinks };
