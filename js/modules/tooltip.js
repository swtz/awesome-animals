import { isMobile } from './utils/utils.js';

export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // binding 'this' to the callback to reference the class object
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // calls the function 'createTooltipBox' and passing
  // in the arg0 the 'currentTarget' which is the
  // selected tooltip that receive the 'mouseover' event
  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);

    // adds events to 'currentTarget' and attaches
    // the respective callbacks
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // setting 'top' and 'left' style properties of tooltip
  // box while 'mousemove' event is on
  // (follows the cursor, because event object is 'MouseEvent')
  onMouseMove({ pageX, pageY }) {
    this.tooltipBox.style.top = `${pageY + 15}px`;
    this.tooltipBox.style.left = `${pageX + 15}px`;
  }

  // removes the tooltip box from DOM when 'mouseleave'
  // event is fired
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();

    // removes the events from 'currentTarget' for optimization
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // creates the tooltip box element
  // sets a property with it
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // adds 'mouseover' event to the tooltip
  // and attach the 'onMouseOver' callback
  addTooltipEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  // 'isMobile' checks if width of screen is less than 700px
  // if yes return 'true'. In the mobile devices, the tooltip
  // isn't recommended.
  init() {
    if (this.tooltips && !isMobile) this.addTooltipEvent();
    return this;
  }
}
