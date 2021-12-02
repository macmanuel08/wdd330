import Covid from "./covid.js";
import { getJSON } from "./helper.js";
import { readFromLS } from "./ls.js";

const url = 'https://api.covid19api.com/summary';

const covidData = await getJSON(url);
const countries = covidData.Countries;

const recentSearchesBTN = document.getElementById('show-searches');
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

worldwideContainer.innerHTML = covid.renderData(covidData.Global);

recentSearchesBTN.addEventListener('click', () => {
  searchesContainer.innerHTML = "";
  const recents = readFromLS(key);
  const ul = document.createElement('ul')
  for (let recent of recents) {
    const li = document.createElement('li')
    li.append(recent);
    ul.append(li);
  }
  searchesContainer.append(ul);
});