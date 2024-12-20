const isMobile = window.matchMedia('(max-width: 700px)');
const faqList = document.querySelector('.faq-lista');
const lastDt = faqList.lastElementChild.previousElementSibling;

const ogLastDt = lastDt.innerText;

// setInterval(() => {
//   if (isMobile.matches) {
//     lastDt.innerText = 'Troquei o texto de modo dinâmico!';
//   } else {
//     lastDt.innerText = ogLastDt;
//   }
// }, 1000)

if (isMobile.matches) {
  lastDt.innerText = 'Troquei o texto de modo dinâmico!';
} else {
  lastDt.innerText = ogLastDt;
}

console.log('Tamanho da tela:', window.innerWidth);
