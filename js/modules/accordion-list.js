export default class Accordion {
  constructor(accordionList, className) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = className;
  }

  // toggles the class which show the content ('nextElementSibling') of target
  toggleActive(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adds events for each accordion item
  addAccordionListEvents() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleActive(item));
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
