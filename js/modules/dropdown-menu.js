import clickOutside from './click-outside.js';
import { events } from './utils/utils.js';

export default class DropdownMenu {
  constructor(dropdowns, className) {
    this.dropdowns = document.querySelectorAll(dropdowns);
    this.activeClass = className;
    this.events = events;

    // binding 'this' to the callback to reference the class object.
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  // close the dropdown menu when clicking outside of it.
  addClickOutsideDropdown(currentTarget) {
    clickOutside(events, currentTarget, () => {
      currentTarget.classList.remove(this.activeClass);
    });
  }

  // toggles the display of the dropdown menu.
  toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');

    if (!dropdownMenu.contains(event.target)) {
      event.currentTarget.classList.toggle(this.activeClass);

      this.addClickOutsideDropdown(event.currentTarget);
    }
  }

  // add events for each dropdown menu selected.
  addDropdownsEvents() {
    this.dropdowns.forEach((dropdownMenu) => {
      events.forEach((userEvent) => {
        dropdownMenu.addEventListener(userEvent, this.toggleDropdown);
      });
    });
  }

  init() {
    if (this.dropdowns.length) this.addDropdownsEvents();
    return this;
  }
}
