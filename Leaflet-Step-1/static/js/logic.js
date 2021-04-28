var map = L.map("map", {
    center: [40, -10],
    zoom: 3,
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(map);

function getColor(mag) {
    switch (true) {
        case mag > 90:
            return 'red';
        case mag > 60:
            return 'orange';
        case mag < 61:
            return 'green';
    }
}


d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson").then(data => {


    L.geoJson(data, {
        pointToLayer: function (quake, latlng) {

            return L.circleMarker(latlng,
                {
                    radius: quake.properties.mag * 4,
                    fillColor: getColor(latlng.alt),
                    color: 'black',
                    fillOpacity: 1,
                    weight: 1.5

                }).bindPopup(`<h3>${quake.properties.place}</h3><h3>Magnitude: ${quake.properties.mag}</h3>`);
        }
    }).addTo(map);
});


var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML = "<div style='border: 2px solid black;padding: 2px;background-color:red;color:white'> > 90</div>\
    <div style='border: 2px solid black;padding: 2px;background-color:orange;color:white'> > 60</div>\
    <div style='border: 2px solid black;padding: 2px;background-color:green;color:white'> < 61</div>"

    return div;
};

legend.addTo(map);