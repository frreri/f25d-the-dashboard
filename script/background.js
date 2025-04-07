'use strict';

const randomBgBtn = document.getElementById('bg-btn');

export const setupBackground = () => {
  const randomBg = () => {
    const width = Math.floor(window.innerWidth);
    const height = Math.floor(window.innerHeight);
    const randNum = Math.floor(Math.random() * 10000);
    const imgUrl = `https://picsum.photos/${width}/${height}?random=${randNum}`;
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url(${imgUrl})`;
  };

  randomBg();
  randomBgBtn.addEventListener('click', randomBg);
};
