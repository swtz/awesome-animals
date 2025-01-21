export const isMobile = matchMedia('(max-width: 700px)').matches;
export const events = ['touchstart', 'click'];

export function debounce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
