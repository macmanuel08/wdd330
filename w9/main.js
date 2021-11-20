console.log(navigator.geolocation)

navigator.geolocation.getCurrentPosition(youAreHere);

function youAreHere(position) {
  const locationPoint = document.getElementById("location");
  locationPoint.innerHTML = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude} Timestamp: ${position.timestamp}`; 
}