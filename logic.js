// Create a map object.
let myMap = L.map("map", {
  center: [40.127247, -83.143511],
  zoom: 13
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing bridge identifier, location, district, and year built
let bridges = [{
  location: [40.705256, -80.579985],
  identifier: 1530001,
  district: 11,
  yearbuilt: '12/10/19'
},
{
  location: [41.39271, -81.92916],
  identifier: 1834569,
  district: 12,
  yearbuilt: '11/4/19'
},
{
  location: [41.5811, -80.6852],
  identifier: 435253,
  district: 4,
  yearbuilt: '7/1/18'
},
{
  location: [41.685231, -84.047791],
  identifier: 2631820,
  district: 2,
  yearbuilt: '10/27/17'
},
{
  location: [40.464929,-82.291084],
  identifier: 4230001,
  district: 5,
  yearbuilt: '9/28/14'
}
];

// Looping through the bridges array, create one marker for each bridge, bind a popup containing its identifier, 
//district and installation year, and add it to the map.
for (let i = 0; i < bridges.length; i++) {
  let bridge = bridges[i];
  L.marker(bridge.location)
    .bindPopup(`<h1> Bridge# ${bridge.identifier}</h1> <hr> <h3>District ${bridge.district.toLocaleString()}</h3> <hr> <h3>Year Built-${bridge.yearbuilt.toLocaleString()}</h3>`)
    .addTo(myMap);
}
