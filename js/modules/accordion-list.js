import { events } from './utils/utils';

export default class Accordion {
  constructor(accordionList, className) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = className;
    this.events = events;
  }

  toggleActive() {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionListEvents() {
    this.events.forEach((userEvent) => {
      this.accordionList.forEach((item) => {
        item.addEventListener(userEvent, this.toggleActive);
      });
    });
  }

  init() {
    if (this.accordionList.length) this.addAccordionListEvents();
  }
}
