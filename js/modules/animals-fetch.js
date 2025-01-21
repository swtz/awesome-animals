import AnimateNumbers from './animate-numbers.js';

export default async function animalsFetch(url, target) {
  const html = document.querySelector(target);

  // creates a 'div' element that contains the content of the object
  // passed thought the parameter.
  function createAnimal(object) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${object.specie}</h3><span data-number>${object.total}</span>`;
    return div;
  }

  // receives a 'animal' object and pass it to 'createAnimal' function.
  // Appends the 'div' element created by 'createAnimal' to the 'html'.
  function fillAnimals(animal) {
    html.appendChild(createAnimal(animal));
  }

  // calls the 'init()' method from 'animate-numbers.js'
  function animateNumbers() {
    const animate = new AnimateNumbers('[data-number]', '.numbers', 'active');
    animate.init();
  }

  // fetching the 'url', awaits the response and
  // converts it to a 'json' object.
  async function createAnimals() {
    try {
      const responseAnimals = await fetch(url);
      // 'animaisList' has the prototype of 'Array'.
      const animalsList = await responseAnimals.json();

      // for each object in 'animalsList' calls 'fillAnimals'
      animalsList.forEach((animal) => fillAnimals(animal));

      // after all, calls 'animateNumbers' to animated the numbers.
      animateNumbers();
    } catch (error) {
      console.log(Error(error));
    }
  }

  // calls the 'main function' to start the process when the module
  // is called too.
  return createAnimals();
}
