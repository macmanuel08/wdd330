import { readFromLS, writeToLS } from "./ls.js";

export default class Covid {
  constructor() {
    this.result = document.getElementById('result-container');
    this.searchContainer = document.getElementById('search-data-container');
    this.searchHeading =  document.getElementById('search-header');
    this.error = document.getElementById('error-container');
  }
  renderData(data) {
    const newConfirmed = data.NewConfirmed;
    const newDeaths = data.NewDeaths;
    const newRecovered = data.NewRecovered;
    const totalConfirmed = data.TotalConfirmed;
    const totalDeaths = data.TotalDeaths;
    const totalRecovered = data.TotalRecovered;
  
    return `
        <div class="new-confirmed"><h6>New Confirmed</h6><div class="data">${newConfirmed}</div></div>
        <div class="new-deaths"><h6>New Deaths</h6><div class="data">${newDeaths}</div></div>
        <div class="new-recovered"><h6>New Recovered</h6><div class="data">${newRecovered}</div></div>
        <div class="total-confirmed"><h6>Total Confirmed</h6><div class="data">${totalConfirmed}</div></div>
        <div class="total-deaths"><h6>Total Deaths</h6><div class="data">${totalDeaths}</div></div>
        <div class="total-recovered"><h6>Total Recovered</h6><div class="data">${totalRecovered}</div></div>
    `;
  }
  searchInput(inputValue, countries) {
    let searchedData = filterCountries(inputValue, countries);
    if (searchedData[0] == null || inputValue == "") {
      this.error.innerHTML = this.showError(inputValue);
    } else {
      this.showData(searchedData[0], searchedData[0].Country);
      this.saveSearch(inputValue);
    }
  }
  showError(inputValue) {
    if (inputValue == "") {
      return "Please Enter Name of a Country";
    } else if (inputValue.length == 2 || inputValue.length == 3) {
      return "Capitalize country's two letter abbreviation (e.g US for USA)"; 
    } else {
      return `<ul>
                <li>Please enter a valid country</li>
                <li>Check the spelling</li>
              </ul>`; 
    }
  }
  showData(data, country) {
    this.searchContainer.innerHTML = this.renderData(data);
    this.showSearchedData(country);
  }
  showSearchedData(country) {
    showHeading(this.searchHeading ,country);
    this.result.classList.add('show');
    this.result.classList.add('fade-in');
    setTimeout(() => {
      this.result.classList.remove('fade-in');
    }, 1000);
  }
  saveSearch(inputValue) {
    const key = 'recentSearches';
    const recentSearches = getToDo(key);
    if (recentSearches.length == 5) {
      recentSearches.shift();
      recentSearches.push(inputValue);
    } else {
      recentSearches.push(inputValue);
    }
    writeToLS(key, recentSearches);
  }
}

function filterCountries(searchedCountry, countries) {
  return countries.filter(country => country.Country == searchedCountry || country.CountryCode == searchedCountry || country.Slug == searchedCountry);
}

function showHeading(container ,country) {
  container.innerHTML = `Data for ${country}`;
}

function getToDo(key) {
  let ls = readFromLS(key);
  return ls === null ? [] : ls;
}