export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.5;

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distancesArray = [...this.sections].map((section) => ({
      element: section,
      offset: section.offsetTop - this.halfWindow,
    }));
  }

  checkDistance() {
    const scrollTop = window.scrollY;
    this.distancesArray.forEach((section) => {
      if (scrollTop > section.offset) {
        section.element.dataset.scrollAnimated = 'active';
      }
    });
  }

  addWindowEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

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
