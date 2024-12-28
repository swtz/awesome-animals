export default function initScrollAnimated() {
  const sections = document.querySelectorAll('[data-scroll-animated]');

  if (sections.length) {
    function animaScroll() {
      sections.forEach(section => {
        const elementTop = getRectTop(section);
        const top = window.innerHeight * 0.6;

        if (elementTop < top) {
          section.dataset.scrollAnimated = "active";
        }
      })
    }

    function getRectTop(el) {
      return el.getBoundingClientRect().top;
    }

    window.addEventListener('scroll', animaScroll);

    animaScroll();
  }
}