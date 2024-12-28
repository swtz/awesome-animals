export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('[data-smooth-scroll] a[href^="#"]');

  function handleClick(event) {
    event.preventDefault();
    const section = findById(event.target);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      scrollTo(
        {
          top: sectionRect.top,
          behavior: 'smooth'
        }
      );
    }
  }

  function findById(el) {
    return document.querySelector(`${el.getAttribute('href')}`);
  }

  internalLinks.forEach(link => {
    link.addEventListener('click', handleClick)
  });
}