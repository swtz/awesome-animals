import clickOutside from './click-outside.js';
import { events } from './utils/utils.js';

export default class MenuMobile {
  constructor() {
    this.btn = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');
    this.events = events;
  }

  handleEvent(event) {
    event.preventDefault();
    this.menuList.classList.add('active');
    this.btn.classList.add('active');

    clickOutside(events, this.menuList, () => {
      this.menuList.classList.remove('active');
      this.btn.classList.remove('active');
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
