import clickOutside from './click-outside.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  if (dropdownMenus.length) {
    const events = ['click', 'touchstart'];

    function handleEvent(event) {
      event.preventDefault();
      const dropdownMenu = this.querySelector('.dropdown-menu')

      if (!dropdownMenu.contains(event.target)) {
        this.classList.toggle('active');
      }

      function removeActive(element) {
        element.classList.remove('active');
      }

      clickOutside(events, this, removeActive);
    }

    dropdownMenus.forEach(dropdownMenu => {
      events.forEach(userEvent => {
        dropdownMenu.addEventListener(userEvent, handleEvent);
      });
    });
  }
}
