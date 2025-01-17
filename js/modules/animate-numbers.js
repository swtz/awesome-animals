export default class AnimateNumbers {
  constructor(numbers, observeTarget, className) {
    this.numbers = document.querySelectorAll(numbers);
    this.observeTarget = document.querySelector(observeTarget);
    this.activeClass = className;

    // binding 'this' to the callback to reference the class object
    this.thereIsActiveClass = this.thereIsActiveClass.bind(this);
  }

  // receives a NodeList of elements where each
  // item contains a number in the 'innerText' property
  static animate(numbers) {
    numbers.forEach((number) => {
      let i = 0;
      const total = +number.innerHTML;
      const increment = Math.floor(total / 100);
      const timer = setInterval(() => {
        i += increment;
        number.innerHTML = i;

        if (i > total) {
          number.innerHTML = total;
          clearInterval(timer);
        }
      }, 25 + Math.random());
    });
  }

  // checks if changed attribute have a value equals the 'this.activeClass'
  // and 'disconnect' the observer for optimization
  // and calls the static method '.animate(NodeList)'
  thereIsActiveClass(mutation) {
    if (mutation[0].target.getAttribute('data-scroll-animated') === this.activeClass) {
      this.observer.disconnect();
      this.constructor.animate(this.numbers);
    }
  }

  // adds a 'MutationObserver' object to 'observeTarget'
  // the method .observe(), fires the callback 'thereIsActiveClass'
  // only when some attribute is changed
  addElementMutationObserver() {
    this.observer = new MutationObserver(this.thereIsActiveClass);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length) this.addElementMutationObserver();
    return this;
  }
}
