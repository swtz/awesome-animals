import clickOutside from './click-outside.js';
import { events, isMobile } from './utils/utils.js';

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

  // already activates dropdown menu on mobile devices
  setDropdownMenuActive() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownHandle = document.querySelector('[data-dropdown]');
    if (isMobile) {
      dropdownMenu.classList.add(this.activeClass);
      dropdownHandle.classList.add(this.activeClass);
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
    if (this.dropdowns.length) this.addDropdownsEvents(); this.setDropdownMenuActive();
    return this;
  }
}
