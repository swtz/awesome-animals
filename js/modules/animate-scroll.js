export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.anime = this.anime.bind(this);
  }

  anime() {
    function getRectTop(el) {
      return el.getBoundingClientRect().top;
    }

    this.sections.forEach((section) => {
      const elementTop = getRectTop(section);
      const top = window.innerHeight * 0.6;

      if (elementTop < top) {
        section.dataset.scrollAnimated = 'active';
      }
    });
  }

  init() {
    if (this.sections.length) {
      window.addEventListener('scroll', this.anime);
      this.anime();
    }
  }
}
