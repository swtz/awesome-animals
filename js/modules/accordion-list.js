import { events } from './utils/utils';

export default class Accordion {
  constructor(accordionList, className) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = className;
    this.events = events;
  }

  // toggles the class which show the content ('nextElementSibling') of target
  toggleActive(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adds events for each accordion item
  addAccordionListEvents() {
    this.events.forEach((userEvent) => {
      this.accordionList.forEach((item) => {
        item.addEventListener(userEvent, (event) => {
          // prevents 'double click' effect by 'touchstart' event
          event.preventDefault();
          this.toggleActive(item);
        });
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.addAccordionListEvents();

      // activates the first accordion item
      this.toggleActive(this.accordionList[0]);
    }
    return this;
  }
}
