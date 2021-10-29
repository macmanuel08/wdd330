function readFromLS(key) {
  let item = localStorage.getItem(key);
  let parsedItem = JSON.parse(item);
  return [...parsedItem];
}

function writeToLS(key, data) {
  let stringifiedData = JSON.stringify(data);
  let arrayData = [...stringifiedData];
  localStorage.setItem(key, arrayData);
}

export {
  readFromLS,
  writeToLS
}