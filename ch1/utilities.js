function qs(selector) {
  let element = document.querySelector(selector);
  return element == null ? null : element;
}

function onTouch(elementSelector, callback) {
  elementSelector.addEventListener('touchend', () => {
    
  });
}

export {
  qs,
  onTouch
}