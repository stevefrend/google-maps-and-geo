
let button = document.getElementById('submit');
let text = document.getElementById('zip');
var map;


// let number = -39;
function initMap(latitude = 40.75, longitude = -74.0060) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 11
  });
  
  
}

button.addEventListener('click', function (e) {
  e.preventDefault()
  zip = text.value;
  getResponse(zip);
})

function getResponse() {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyCMa2NoaFNvhZB_5f7-37JVulI-Ej-AwzM`)
  .then(response => response.json())
  .then(data => {
    let lat = data.results[0].geometry.location.lat
    let lng = data.results[0].geometry.location.lng
    initMap(lat, lng)
  })
}