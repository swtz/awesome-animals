import clickOutside from './click-outside.js';

export default function initMenuMobile() { }

const btn = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const html = document.documentElement;
const events = ['touchstart', 'click'];

events.forEach(userEvent => {
  btn.addEventListener(userEvent, handleEvent)
})

function handleEvent() {
  menuList.classList.add('active');
  btn.classList.add('active');

  clickOutside(events, menuList, () => {
    menuList.classList.remove('active');
    btn.classList.remove('active');
  })
}
