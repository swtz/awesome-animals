import { events } from './utils/utils';

export default class TabNav {
  constructor(menuList, contentList, className) {
    this.tabMenu = document.querySelectorAll(menuList);
    this.tabContent = document.querySelectorAll(contentList);
    this.activeClass = className;
    this.events = events;
  }

  // shows only one content at a time
  // remove 'activeClass' from all tab contents
  // and add 'activeClass' in the element that
  // receives the 'userEvent' from 'addTabMenuEvent'
  toggleTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }

  // adds event for each tab menu selected
  addTabMenuEvent() {
    this.events.forEach((userEvent) => {
      this.tabMenu.forEach((li, index) => {
        li.addEventListener(userEvent, () => this.toggleTab(index));
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabMenuEvent();

      // activates first tab item
      this.toggleTab(0);
    }
    return this;
  }
}
