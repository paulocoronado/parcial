var map = L.map('map').setView([4.622059760042157, -74.17094971036362], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon(){
    let myData = await fetch('britalia.geojson');
    let myPolygon = await myData.json();

    L.geoJSON(myPolygon,
        {
            style:{
                color:'blue'
            }
        }
    ).addTo(map);
}

loadPolygon();