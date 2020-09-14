let currentLat = 29.426827
let currentLong = -98.489615

mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [
        currentLong,
        currentLat
    ], // starting position [lng, lat]
    zoom: 10, // starting zoom
    marker: true
});