import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import animalsFetch from './modules/animals-fetch.js';
import btcFetch from './modules/btc-fetch.js';
import AnimateScroll from './modules/animate-scroll.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';

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

animalsFetch('./data/animals-api.json', '.grid-numbers');
btcFetch('https://blockchain.info/ticker', '[data-btc]');

const animateScroll = new AnimateScroll('[data-scroll-animated]');
animateScroll.init();

const dropdownmenu = new DropdownMenu();
dropdownmenu.init('[data-dropdown]');

initMenuMobile();
initOperation();
