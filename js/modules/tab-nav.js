export default function initTabNavigation() {
  const imgList = document.querySelector('.animais-lista');
  const imgs = imgList.querySelectorAll('li img');
  const sectionList = document.querySelector('.animais-descricao');
  const sections = sectionList.querySelectorAll('[data-tab-nav]');

  if (!sections.length) {
    document.documentElement.classList.remove('js');
  } else {
    sections[0].classList.add('ativo');

    imgs.forEach((img) => {
      img.addEventListener('click', handleClick);
    })

    function handleClick(event) {
      imgs.forEach((img, index) => {
        sections[index].classList.remove('ativo');
        if (event.target === img) {
          sections[index].classList.add('ativo');
        }
      })
    }
  }
}