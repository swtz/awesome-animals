export default class AnimateNumbers {
  constructor(numbers) {
    this.numbers = document.querySelectorAll(numbers);
  }

  animaNumeros() {
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

  let observer;
  handleMutation(mutation) {
    if (mutation[0].target.getAttribute('data-scroll-animated') === 'active') {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector('.numbers');

  observer.observe(observeTarget, { attributes: true });
}
