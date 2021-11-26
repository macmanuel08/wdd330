import Covid from "./covid.js";
import { getJSON } from "./helper.js";

const url = 'https://api.covid19api.com/summary';

const covid = new Covid();

const covidData = await getJSON(url);
const countries = covidData.Countries;

const errorContainer =document.getElementById('error-container')
const worldwideContainer = document.getElementById('worldwide-data-container');
const input = document.getElementById('input');
const submit = document.getElementById('search-btn');

input.addEventListener('keyup', (e) => {
  errorContainer.innerHTML = "";
  if (e.key == 'Enter') {
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