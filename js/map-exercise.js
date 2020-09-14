
mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

//Favorite #1
let popupMarker = function () {
    geocode("13830 I-35, Live Oak, TX 78233", MAPBOX_TOKEN)
            .then(function(result) {
                let texasRoadHousePopUp = new mapboxgl.Popup()
                    .setLngLat([-98.335650, 29.564650])
                    .setHTML("Texas Roadhouse in Live Oak, TX")
                let texasRoadHouseMarker = new mapboxgl.Marker()
                    .setLngLat([-98.335650, 29.564650])
                    .addTo(map)
                    .setPopup(texasRoadHousePopUp);
                texasRoadHouseMarker();
            });
}
let popup1 = document.getElementById('TexasRoad')
popup1.addEventListener('click', popupMarker);

// Favorite #2
let popupMarker2 = function(){
    geocode("2731 S WW White Rd, San Antonio, TX 78222", MAPBOX_TOKEN)
        .then(function(result) {
            let smokehousePopup = new mapboxgl.Popup()
                .setLngLat([-98.405710, 29.382220])
                .setHTML('2M SmokeHouse San Antonio, TX')
                // .addTo(map);
            let twoMSmokehouseMarker = new mapboxgl.Marker()
                .setLngLat([-98.405710, 29.382220])
                .addTo(map)
            .setPopup(smokehousePopup);
            twoMSmokehouseMarker();
            // console.log("Geocoded results: " + result);
            // map.setCenter(result);
            // map.setZoom(15);

        });
}

let popup2 = document.getElementById('smokehouse')
popup2.addEventListener('click', popupMarker2);

//Favorite # 3
let popupMarker3 = function () {
    geocode("5999 De Zavala Rd, San Antonio, TX 78249", MAPBOX_TOKEN)
        .then(function(result) {
           let romePizzaPopup = new mapboxgl.Popup()
               .setLngLat([-98.600990, 29.563250])
               .setHTML("Rome's Pizza San Antonio, TX")
            let romePizzaMarker = new mapboxgl.Marker()
                .setLngLat([-98.600990, 29.563250])
                .addTo(map)
                .setPopup(romePizzaPopup);
           romePizzaMarker();
        });

}

let popup3 = document.getElementById('rome')
popup3.addEventListener('click', popupMarker3);

let favorite = [
    {
    restaurant: "Texas Road House",
    address: "13830 I-35, Live Oak, TX 78233",
    entries: ['Ribs, Chicken, Shrimp, Steak'],
    sides: ['Mashed Potatoes', 'Corn', 'Apple Sauce', 'Green Beans', 'Steak Fries'],
    appetizers: ['Fried Pickles', 'Onion Bloom', 'Snakebite Rattlers']

},
    {
        restaurant: '2M Smokehouse',
        address: "2731 S WW White Rd, San Antonio, TX 78222",
        entries: ['Brisket', 'Ribs'],
        sides: ['Macaroni and Cheese', 'Corn', 'Fries'],
        appetizers: ['Chips and Salsa', 'Fried Pickles']
    },
    {
        restaurant: 'Rome\'s Pizza',
        address: "5999 De Zavala Rd, San Antonio, TX 78249",
        entries: ['Pizza', 'Pazones', 'Salads', 'Wings'],
        sides: ['Fries', 'Onion Rings'],
        appetizers: 'None'
    }
]

console.log("My favorite Restaurant is " + favorite[1].restaurant + "!")