import initTabNavigation from "./modules/tab-nav.js";
import initAccordionList from "./modules/accordion-list.js";
import initSmoothScroll from "./modules/smooth-scroll.js";
import initScrollAnimated from "./modules/scroll-animated.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperation from "./modules/operation.js";
import initAnimalsFetch from "./modules/animals-fetch.js";
import initBtcFetch from "./modules/btc-fetch.js";

export const isMobile = matchMedia('(max-width: 700px)').matches;

initTabNavigation();
initAccordionList();
initSmoothScroll();
initScrollAnimated();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initAnimalsFetch();
initBtcFetch();
