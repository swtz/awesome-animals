import clickOutside from './click-outside.js';
import { events } from './utils/utils.js';

export default class MenuMobile {
  constructor(button, menu, className) {
    this.btn = document.querySelector(button);
    this.menuList = document.querySelector(menu);
    this.activeClass = className;
    this.events = events;
  }

  handleEvent(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.btn.classList.add(this.activeClass);

    clickOutside(events, this.menuList, () => {
      this.menuList.classList.remove(this.activeClass);
      this.btn.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    events.forEach((userEvent) => {
      this.btn.addEventListener(userEvent, this.handleEvent);
    });
  }

  init() {
    if (this.btn && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
