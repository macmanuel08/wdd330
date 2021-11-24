const url = 'https://api.covid19api.com/summary';

fetch (url)
.then(response => response.json())
.then(covid => {
 console.log(covid);
});