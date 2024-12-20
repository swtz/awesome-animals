// Class 0306 (ORIGAMID)

// #1
const firstImg = document.querySelector('img');

const offSetTop = firstImg.offsetTop;
console.log(offSetTop); // 350 (browser full screen)

// #2
const allImgs = document.querySelectorAll('img');
let sum = 0;

allImgs.forEach((img) => {
  sum += img.width;
})
console.log(sum); // 1410 (browser full screen)

// #3
const allLinks = document.querySelectorAll('a');

allLinks.forEach((link) => {
  // link.style.height = '48px';
  const height = link.getBoundingClientRect().height;
  const width = link.getBoundingClientRect().width;

  if (height < 48 || width < 48) {
    console.log(`O link ${link.innerText} NÃO possui uma boa acessibilidade.`);
  } else {
    console.log(`O link ${link.innerText} POSSUI uma boa acessibilidade.`);
  }
})

// #4
const isMobile = matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');

if (isMobile.matches) {
  menu.classList.add('menu-mobile');
}
