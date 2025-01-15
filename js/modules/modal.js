export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const btnLogin = document.querySelector('button[type="submit"]');
  const modal = document.querySelector('[data-modal="container"]');
  const events = ['click', 'touchstart'];

  function handleEvent(event) {
    event.preventDefault();
    modal.classList.toggle('active');
  }

  function clickOutside(event) {
    if (this === event.target) {
      modal.classList.remove('active');
    }
  }

  events.forEach((userEvent) => {
    btnOpen.addEventListener(userEvent, handleEvent);
    btnClose.addEventListener(userEvent, handleEvent);
    modal.addEventListener(userEvent, clickOutside);
    btnLogin.addEventListener(userEvent, (event) => event.preventDefault());
  });
}
