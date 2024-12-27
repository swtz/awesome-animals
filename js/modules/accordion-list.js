export default function initAccordionList() {
  const faqListDt = document.querySelectorAll('[data-accordion] dt');

  if (faqListDt.length) {
    faqListDt[0].classList.add('active');
    faqListDt[0].nextElementSibling.classList.add('active');

    function handleClick() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    faqListDt.forEach(dt => {
      dt.addEventListener('click', handleClick);
    });
  }
}