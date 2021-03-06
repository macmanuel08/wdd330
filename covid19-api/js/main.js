import Covid from "./covid.js";
import { getJSON } from "./helper.js";
import { readFromLS } from "./ls.js";

const url = 'https://api.covid19api.com/summary';

const covidData = await getJSON(url);
const countries = covidData.Countries;

const key = 'recentSearches';
const searchesContainer = document.getElementById('searches');
const errorContainer =document.getElementById('error-container')
const worldwideContainer = document.getElementById('worldwide-data-container');
const input = document.getElementById('input');
const submit = document.getElementById('search-btn');

const covid = new Covid();

input.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    errorContainer.innerHTML = "";
    let inputValue = input.value;
    covid.searchInput(inputValue, countries);
    input.value = "";
  }
});

submit.addEventListener('click', () => {
  errorContainer.innerHTML = "";
  let inputValue = input.value;
  covid.searchInput(inputValue, countries);
  input.value = "";
});

setInterval(() => {
  displayRecents();
}, 1000);

worldwideContainer.innerHTML = covid.renderData(covidData.Global);

function displayRecents() {
  searchesContainer.innerHTML = "";
  const recents = readFromLS(key);
  if (recents != null) {
    for (let recent of recents) {
      const br = document.createElement('br')
      searchesContainer.append(recent);
      searchesContainer.append(br);
    } 
  }
}