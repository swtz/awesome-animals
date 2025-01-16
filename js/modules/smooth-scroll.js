import { events } from './utils/utils';

export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);

    // checks if 'options' exists else assign a default value to it
    if (options === undefined || Object.keys(options).length === 0) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    // binding 'this' to the callback to reference this object
    this.scrollToElement = this.scrollToElement.bind(this);
  }

  // get value of 'href' from target
  // selects a element that contains the same value
  // of 'href' into 'id' and
  // scrolls to the 'start' of element
  scrollToElement(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const element = document.querySelector(href);
    element.scrollIntoView(this.options);
  }

  // adds events for each selected links
  addLinksEvent() {
    events.forEach((userEvent) => {
      this.internalLinks.forEach((link) => {
        link.addEventListener(userEvent, this.scrollToElement);
      });
    });
  }

  // fires 'addLinksEvent' if only exists some link selected
  init() {
    if (this.internalLinks.length) this.addLinksEvent();
    return this;
  }
}
