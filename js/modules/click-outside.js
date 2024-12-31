export default function clickOutside(
  events,
  element,
  callback) {
  const html = document.documentElement;

  if (!html.hasAttribute('data-outside')) {
    events.forEach(userEvent => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleClickOutside)
      });
    })
    html.setAttribute('data-outside', '');
  }

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      if (!event.target.classList.contains('active')) {
        callback();
        events.forEach(userEvent => {
          html.removeEventListener(userEvent, handleClickOutside);
        })
        html.removeAttribute('data-outside');
      }
    }
  }

  // Using callback-object:
  //
  // const callbackObject = {};
  // callbackObject.element = element;
  // callbackObject.handleEvent = function (event) {
  //   if (!this.element.contains(event.target)) {
  //     callbackFn(this.element);
  //     events.forEach(userEvent => {
  //       html.removeEventListener(userEvent, callbackObject);
  //     })
  //     html.removeAttribute('data-outside');
  //   }
  // }
}
