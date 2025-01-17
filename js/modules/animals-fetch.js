import AnimateNumbers from './animate-numbers.js';

export default async function initAnimalsFetch() {
  const dataAnimals = await fetch('./data/animals-api.json');
  const dataAnimalsJson = await dataAnimals.json();
  const html = document.querySelector('.grid-numbers');
  const animateNumbers = new AnimateNumbers('[data-number]');

  function createHTML(object) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${object.specie}</h3><span data-number>${object.total}</span>`;
    return div;
  }

  function changeHTML(oldHTML, newHTML) {
    oldHTML.appendChild(newHTML);
  }

  dataAnimalsJson.forEach((object) => {
    const newHTML = createHTML(object);
    changeHTML(html, newHTML);
  });

  animateNumbers.init();
}
