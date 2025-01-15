import SmoothScroll from './modules/smooth-scroll.js';
import initTabNavigation from './modules/tab-nav.js';
import initAccordionList from './modules/accordion-list.js';
import initScrollAnimated from './modules/scroll-animated.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import initAnimalsFetch from './modules/animals-fetch.js';
import initBtcFetch from './modules/btc-fetch.js';

const smoothScroll = new SmoothScroll('[data-smooth-scroll] a[href^="#"]');
smoothScroll.init();

initTabNavigation();
initAccordionList();
initScrollAnimated();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initAnimalsFetch();
initBtcFetch();
