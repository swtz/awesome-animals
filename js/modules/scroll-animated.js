export default function initScrollAnimated() {
  const sections = document.querySelectorAll('[data-scroll-animated]');

  if (!sections.length) {
    document.documentElement.classList.remove('js');
  } else {
    function animaScroll() {
      sections.forEach(section => {
        const elementTop = getRectTop(section);
        const top = window.innerHeight * 0.6;

        if (elementTop < top) {
          section.dataset.scrollAnimated = "active";
          console.log(section.dataset, top);
        }
      })
    }

    function getRectTop(el) {
      return el.getBoundingClientRect().top;
    }

    window.addEventListener('scroll', animaScroll);
  }
}