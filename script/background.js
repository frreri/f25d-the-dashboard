'use strict';

const randomBgBtn = document.getElementById('bg-btn');

export const setupBackground = () => {
  const randomBg = () => {
    console.log('test');
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url('https://picsum.photos/${Math.floor(
      window.innerWidth
    )}/${Math.floor(window.innerHeight)}?random=${Math.floor(
      Math.random() * 10000
    )}')`;
  };

  randomBg();

  randomBgBtn.addEventListener('click', randomBg);
};
