export default function initNumberAnimated() {
  const numbers = document.querySelectorAll('[data-number]');

  function animaNumeros() {
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
  function handleMutation(mutation) {
    if (mutation[0].target.getAttribute('data-scroll-animated') === 'active') {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector('.numbers');

  observer.observe(observeTarget, { attributes: true });
}
