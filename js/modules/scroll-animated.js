export default function initScrollAnimated() {
  const sections = document.querySelectorAll('[data-scroll-animated]');

  function animaScroll() {
    function getRectTop(el) {
      return el.getBoundingClientRect().top;
    }

    sections.forEach((section) => {
      const elementTop = getRectTop(section);
      const top = window.innerHeight * 0.6;

      if (elementTop < top) {
        section.dataset.scrollAnimated = 'active';
      }
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', animaScroll);
    animaScroll();
  }
}
