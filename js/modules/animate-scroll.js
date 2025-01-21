export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.5;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // gets each HTMLElement and its 'offsetTop' value from
  // 'sections' property and returns them as properties of
  // an object and creates the property 'distancesArray'
  // with them.
  getDistance() {
    this.distancesArray = [...this.sections].map((section) => ({
      element: section,
      offset: section.offsetTop - this.halfWindow,
    }));
  }

  // checks if the 'scrollTop' value is greater than the
  // 'offset' value of each section in 'distancesArray' and
  // sets the 'data-scroll-animated' attribute value to 'active'.
  checkDistance() {
    const scrollTop = window.scrollY;
    this.distancesArray.forEach((section) => {
      if (scrollTop > section.offset) {
        section.element.dataset.scrollAnimated = 'active';
      }
    });
  }

  // adds 'scroll' event and its callback to DOM.
  addWindowEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

  // removes 'scroll' event and its callback from DOM.
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.addWindowEvent();
      this.getDistance();
      this.checkDistance();
    }
    return this;
  }
}
