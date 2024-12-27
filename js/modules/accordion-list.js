export default function initAccordionList() {
  const faqListDt = document.querySelectorAll('[data-accordion] dt');

  if (faqListDt.length) {
    function handleClick(event) {
      const dd = event.currentTarget.nextElementSibling;
      event.target.classList.toggle('active');
      dd.classList.toggle('active');
    }

    faqListDt.forEach(dt => {
      dt.addEventListener('click', handleClick);
    });
  }
}