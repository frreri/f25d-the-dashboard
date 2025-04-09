'use strict';

import { getJSON } from './jsonFetcher.js';

export class Chuck {
  #apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
  #containerEl;
  #jokeBtn;

  constructor(containerEl, jokeBtn) {
    this.#containerEl = containerEl;
    this.#jokeBtn = jokeBtn;
  }

  run() {
    this.#displayJoke();

    this.#jokeBtn.addEventListener('click', this.#displayJoke.bind(this));
  }

  async #displayJoke() {
    try {
      const data = await getJSON(this.#apiUrl);

      this.#containerEl.innerHTML = `
         <img src="${data.icon_url}" alt="Chuck Norris!">
        <p>${data.value}</p>
      `;
    } catch (err) {
      alert(`💥 Error getting joke: ${err.message} 💥`);
      console.error(err);
    }
  }
}
