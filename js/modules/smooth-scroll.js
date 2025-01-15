export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('[data-smooth-scroll] a[href^="#"]');

  function findById(el) {
    return document.querySelector(`${el.getAttribute('href')}`);
  }

  function handleClick(event) {
    event.preventDefault();
    const section = findById(event.target);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      window.scrollTo(
        {
          top: sectionRect.top,
          behavior: 'smooth',
        },
      );
    }
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', handleClick);
  });
}
