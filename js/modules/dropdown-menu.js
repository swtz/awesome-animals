export default function initDropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');
const events = ['click', 'touchstart'];

function handleEvent(event) {
  event.preventDefault();
  this.classList.toggle('active');
}

dropdownMenus.forEach(dropdownMenu => {
  events.forEach(userEvent => {
    dropdownMenu.addEventListener(userEvent, handleEvent);
  });
});
