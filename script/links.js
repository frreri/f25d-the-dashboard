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

const setupLinks = () => {
  // Checking if there are saved links and pushes them to links array if there are
  const savedLinks = localStorage.getItem('links');
  if (savedLinks) JSON.parse(savedLinks).forEach(link => links.push(link));

  if (links.length > 0) displayLinks(links);

  linkContainer.addEventListener('click', removeLink);
  linkBtn.addEventListener('click', toggleForm);
  form.addEventListener('submit', addLink);
};

const displayLinks = linkArr => {
  linkContainer.innerHTML = '';
  linkArr.forEach((link, index) => {
    const linkEl = document.createElement('a');
    linkEl.dataset.index = index;
    linkEl.href = link.url;
    linkEl.target = '_blank';
    linkEl.classList.add('link');
    linkEl.innerHTML = `
      <img src="${link.favicon}" alt="favicon">
      <p>${link.name}</p>
      <button id="remove-btn" class="remove-btn" title="Remove"><i class="fa-regular fa-square-minus"></i></button>
    `;
    linkContainer.append(linkEl);
  });
};

const toggleForm = () => {
  form.classList.toggle('hidden');
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
    localStorage.setItem('links', JSON.stringify(links));
    displayLinks(links);
    nameInput.value = '';
    urlInput.value = '';
    toggleForm();
  } else {
    alert('Du måste ange både namn och adress (URL)');
  }
};

const removeLink = e => {
  if (e.target.closest('.remove-btn')) {
    // prevent default to not go to the link if the click was on the remove button
    e.preventDefault();
    const linkIndex = Number(e.target.closest('.link').dataset.index);
    links.splice(linkIndex, 1);
    displayLinks(links);
  }
};

export { setupLinks };

// TODO  ADD POSSIBILITY TO REMOVE LINKS
