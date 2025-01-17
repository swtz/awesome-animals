import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initScrollAnimated from './modules/scroll-animated.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import initAnimalsFetch from './modules/animals-fetch.js';
import initBtcFetch from './modules/btc-fetch.js';

const smoothScroll = new SmoothScroll('[data-smooth-scroll] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-accordion] dt', 'active');
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section', 'active');
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]',
  'button[type="submit"]',
  'active',
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initScrollAnimated();
initDropdownMenu();
initMenuMobile();
initOperation();
initAnimalsFetch();
initBtcFetch();
