function qs(selector) {
  let element = document.querySelector(selector);
  return element == null ? null : element;
}

function onTouch(elementSelector, callback) {
  qs(elementSelector).addEventListener('touchend', e => e.currentTarget.click(callback), false);
}

export {
  qs,
  onTouch
}