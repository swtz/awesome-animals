export default function initTabNavigation() {

}

const imgList = document.querySelector('.animais-lista');
const imgsLi = imgList.querySelectorAll('li img');

const sectionList = document.querySelector('.animais-descricao');
const sections = sectionList.querySelectorAll('[data-tab-menu]');

imgsLi.forEach((img) => {
  img.addEventListener('click', handleClick);
})

function handleClick(event) {
  imgsLi.forEach((img, index) => {
    sections[index].classList.remove('ativo');
    if (event.target === img) {
      sections[index].classList.add('ativo');
    }
  })
}