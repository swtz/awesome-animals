import clickOutside from './click-outside.js';
import { events } from './utils/utils.js';

export default class DropdownMenu {
  constructor(dropdowns, className) {
    this.dropdowns = document.querySelectorAll(dropdowns);
    this.activeClass = className;
    this.events = events;

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  addClickOutsideDropdown(currentTarget) {
    clickOutside(events, currentTarget, () => {
      currentTarget.classList.remove(this.activeClass);
    });
  }

  toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');

    if (!dropdownMenu.contains(event.target)) {
      event.currentTarget.classList.toggle(this.activeClass);

      this.addClickOutsideDropdown(event.currentTarget);
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
