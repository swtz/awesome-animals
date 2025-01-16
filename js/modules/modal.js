import { events } from './utils/utils';

export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal, buttonLogin, className) {
    this.btnOpen = document.querySelector(buttonOpen);
    this.btnClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);
    this.btnLogin = document.querySelector(buttonLogin);
    this.activeClass = className;
    this.events = events;

    // binding 'this' to the callback to reference the class' object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // open/close the modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  // handle the 'userEvent' from 'addModalEvent'
  // calls 'toggleModal' to show the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // adds the mobile pattern 'click outside' on the modal
  clickOutsideModal(event) {
    if (this.containerModal === event.target) {
      this.containerModal.classList.remove(this.activeClass);
    }
  }

  // prevents the default behavior of submit button
  preventBtnSubmitDefault() {
    this.events.forEach((userEvent) => {
      this.btnLogin.addEventListener(userEvent, (event) => event.preventDefault());
    });
  }

  // adds events on selected buttons and modal's container
  addModalEvent() {
    this.events.forEach((userEvent) => {
      this.btnOpen.addEventListener(userEvent, this.eventToggleModal);
      this.btnClose.addEventListener(userEvent, this.eventToggleModal);
      this.containerModal.addEventListener(userEvent, this.clickOutsideModal);
    });
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) this.addModalEvent();
    if (this.btnLogin) this.preventBtnSubmitDefault();
    return this;
  }
}
