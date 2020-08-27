console.log(secret);

mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-98.489615, 29.426827], // starting position [lng, lat]
        zoom: 14 // starting zoom
});
/*
var alamoMarker = new mapboxgl.Marker()
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);
var alamoPopup = new mapboxgl.Popup()
    .setLngLat([-98.4861, 29.4260])
    .setHTML('<p>Remember the Alamo!</p>')
    .addTo(map);

var codeupPopup = new mapboxgl.Popup()
    .setLngLat([-98.489615, 29.426827])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map);

var codeupMarker = new mapboxgl.Marker()
    .setLngLat([-98.489615, 29.426827])
    .addTo(map);
*/

console.log("Coordinates for Codeup: [-98.489615, 29.426827]");
geocode("600 Navarro St #350, San Antonio, TX 78205", MAPBOX_TOKEN)
    .then(function(result) {
    console.log("Geocoded results: " + result);
    map.setCenter(result);
    map.setZoom(15);
});

reverseGeocode({lng: -98.4861, lat: 29.4260}, MAPBOX_TOKEN)
    .then(function(results) {
    // logs the address for The Alamo
    console.log("Reverse Geocode Results: " + results);
});