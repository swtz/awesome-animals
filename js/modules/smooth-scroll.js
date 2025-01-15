import { events } from './utils/utils';

export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);

    // checks if 'options' exists else assign a default value to it
    if (this.options) {
      this.options = options;
    } else {
      this.options = {
        behavior: 'smooth',
      };
    }

    // binding 'this' to the callback to reference this object
    this.getElementTopAndScrollTo = this.getElementTopAndScrollTo.bind(this);
  }

  // get HTMLElement that contains the id respective of 'el'
  static findById(el) {
    return document.querySelector(`${el.getAttribute('href')}`);
  }

  // get top from return of 'findById' after checks
  // if exists and scroll to 'element'
  getElementTopAndScrollTo(event) {
    event.preventDefault();
    const element = this.constructor.findById(event.target);
    if (element) {
      this.options.top = element.getBoundingClientRect().top;
      window.scrollTo(this.options);
    }
  }

  // adds events for each selected links
  addLinksEvent() {
    events.forEach((userEvent) => {
      this.internalLinks.forEach((link) => {
        link.addEventListener(userEvent, this.getElementTopAndScrollTo);
      });
    });
  }

  // fires 'addLinksEvent' if only exists some link selected
  init() {
    if (this.internalLinks.length) this.addLinksEvent();
  }
}
