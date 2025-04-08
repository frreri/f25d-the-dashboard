'use strict';

import { getJSON } from './jsonFetcher.js';

const randomBgBtn = document.getElementById('bg-btn');
const keyBtn = document.getElementById('key-btn');

const apiKey = localStorage.getItem('apikey');

export const setupBackground = () => {
  if (!apiKey) {
    randomPicsumBg();
    randomBgBtn.addEventListener('click', randomPicsumBg);
  } else {
    randomUnsplashBg();
    randomBgBtn.addEventListener('click', randomUnsplashBg);
  }

  keyBtn.addEventListener('click', () => {
    const newApiKey = prompt('Your Unsplash Access Key:', apiKey || '');
    if (newApiKey) localStorage.setItem('apikey', newApiKey);
    else localStorage.removeItem('apikey');
    location.reload();
  });
};

const randomPicsumBg = () => {
  const width = Math.floor(window.innerWidth);
  const height = Math.floor(window.innerHeight);
  const randNum = Math.floor(Math.random() * 10000);
  const imgUrl = `https://picsum.photos/${width}/${height}?random=${randNum}`;
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url(${imgUrl})`;
  console.log('%cBG FROM PICSUM API', 'color: #66ff66');
};

const randomUnsplashBg = async () => {
  try {
    const data = await getJSON(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}`
    );
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url(${data.urls.full})`;
    console.log('%cBG FROM UNSPLASH API', 'color: #66ff66');
  } catch (err) {
    alert(`Error getting Unsplash BG: ${err.message}`);
    console.error(err);
  }
};
