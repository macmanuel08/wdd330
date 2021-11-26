function readFromLS(key) {
  let item = localStorage.getItem(key);
  let parsedItem = JSON.parse(item);
  return parsedItem;
}

function writeToLS(key, data) {
  let stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
}

export {
  readFromLS,
  writeToLS
}