// Create a map object.
let myMap = L.map("map", {
  center: [40.127247, -83.143511],
  zoom: 13
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



const apiRequest = new XMLHttpRequest();
const apiUrl = 'http://127.0.0.1:5000/geoLocation';
apiRequest.open('GET', apiUrl);
//apiRequest.setRequestHeader('Access-Control-Allow-Origin', apiUrl);
apiRequest.send();

apiRequest.onload = (e) => {
  console.log(apiRequest.response);
}
  
  


// Looping through the bridges array, create one marker for each bridge, bind a popup containing its identifier, district and installation yer, and add it to the map.
//for (let i = 0; i < outputElement.length; i++) {
  //let bridge = bridges[i];
  //L.marker(bridge.location)
    //.bindPopup(`<h1> Bridge# ${bridge.identifier}</h1> <hr> <h3>District ${bridge.district.toLocaleString()}</h3> <hr> <h3>Year Built-${bridge.yearbuilt.toLocaleString()}</h3>`)
    //.addTo(myMap);
//}
