export default function clickOutside(
  events,
  element,
  callback,
) {
  const html = document.documentElement;

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute('data-outside');
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });
      callback();
    }
  }

  if (!element.hasAttribute('data-outside')) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleClickOutside);
      });
    });
    element.setAttribute('data-outside', '');
  }
}
