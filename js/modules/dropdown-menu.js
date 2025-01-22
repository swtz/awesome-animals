import clickOutside from './click-outside.js';
import { events } from './utils/utils.js';

export default class DropdownMenu {
  constructor(dropdowns) {
    this.dropdowns = document.querySelectorAll(dropdowns);
    this.events = events;
  }

  toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = this.querySelector('.dropdown-menu');

    if (!dropdownMenu.contains(event.target)) {
      this.classList.toggle('active');

      clickOutside(events, this, () => {
        this.classList.remove('active');
      });
    }
  }

  addDropdownsEvents() {
    this.dropdowns.forEach((dropdownMenu) => {
      events.forEach((userEvent) => {
        dropdownMenu.addEventListener(userEvent, this.toggleDropdown);
      });
    });
  }

  init() {
    if (this.dropdowns.length) this.addDropdownsEvents();
  }
}
