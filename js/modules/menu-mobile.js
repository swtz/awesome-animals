import clickOutside from './click-outside.js';
import { events } from './utils/utils.js';

export default class MenuMobile {
  constructor(button, menu, className) {
    this.btn = document.querySelector(button);
    this.menuList = document.querySelector(menu);
    this.activeClass = className;
    this.events = events;

    // binding 'this' to the callback to reference the class object.
    this.open = this.open.bind(this);
  }

  // closes the mobile menu when clicking outside of it.
  addClickOutside() {
    clickOutside(events, this.menuList, () => {
      this.menuList.classList.remove(this.activeClass);
      this.btn.classList.remove(this.activeClass);
    });
  }

  // opens the mobile menu and calls the addClickOutside function.
  open(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.btn.classList.add(this.activeClass);

    this.addClickOutside();
  }

  // adds events to the mobile menu button.
  addMenuMobileEvents() {
    events.forEach((userEvent) => {
      this.btn.addEventListener(userEvent, this.open);
    });
  }

  init() {
    if (this.btn && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
