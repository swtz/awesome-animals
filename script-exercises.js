// #1
const menu = document.querySelector('.menu').cloneNode(true);
document.querySelector('.copyright').appendChild(menu);

// #2
const firstDt = document.querySelector('.faq-lista').firstElementChild;
// console.log(firstDt);

// #3
const dd = firstDt.nextElementSibling;
console.log(dd);

// #4
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
