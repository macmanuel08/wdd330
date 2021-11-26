export default class Covid {
  constructor() {
    this.error = document.getElementById('error-container');
    this.result = document.querySelector('.search-result');
    this.searchContainer = document.getElementById('search-data-container');
    this.searchHeading =  document.getElementById('search-header');
  }
  renderData(data) {
    const newConfirmed = data.NewConfirmed;
    const newDeaths = data.NewDeaths;
    const newRecovered = data.NewRecovered;
    const totalConfirmed = data.TotalConfirmed;
    const totalDeaths = data.TotalDeaths;
    const totalRecovered = data.TotalRecovered;
  
    return `
        <div class="new-confirmed"><h6>New Confirmed</h6><div>${newConfirmed}</div></div>
        <div class="new-deaths"><h6>New Deaths</h6><div>${newDeaths}</div></div>
        <div class="new-recovered"><h6>New Recovered</h6><div>${newRecovered}</div></div>
        <div class="total-confirmed"><h6>Total Confirmed</h6><div>${totalConfirmed}</div></div>
        <div class="total-deaths"><h6>Total Deaths</h6><div>${totalDeaths}</div></div>
        <div class="total-recovered"><h6>Total Recovered</h6><div>${totalRecovered}</div></div>
    `;
  }
  searchInput(inputValue, countries) {
    let searchedData = filterCountries(inputValue, countries);
    if (searchedData[0] == null) {
      this.error = this.showError();
    } else {
      this.showData(searchedData[0], searchedData[0].Country);
    }
  }
  showError() {
    this.error.innerHTML = 'Please enter a valid country';
  }
  showData(data, country) {
    this.searchContainer.innerHTML = this.renderData(data);
    this.showSearchedData(country);
  }
  showSearchedData(country) {
    showHeading(this.searchHeading ,country);
    this.result.classList.add('show');
  }
}

function filterCountries(searchedCountry, countries) {
  return countries.filter(country => country.Country == searchedCountry || country.CountryCode == searchedCountry || country.Slug == searchedCountry);
}

function showHeading(container ,country) {
  container.innerHTML = `Data for ${country}`;
}