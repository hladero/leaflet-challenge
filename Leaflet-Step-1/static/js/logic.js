var map= L.map("map",{
    center: [40,-10],
    zoom:3,
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
        case mag>90:
            return 'red';
        case mag>60:
            return 'orange';
        case mag<61:
            return 'green';
    }
}

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson").then(data=>{
    console.log(data);

    L.geoJson(data,{pointToLayer:function(quake, latlng) {
        console.log(quake);
 
        return L.circleMarker(latlng,
            {
                radius:quake.properties.mag*4,
                fillColor:getColor(latlng.alt),
                color:'black',
                fillOpacity:1,
                stroke: .5
                
            });
        }}).addTo(map);
});
















        // var info=L.control({
        //     position:"bottomright"
        // });

        // info.onAdd = function(){
        //     var div =L.DomUtil.create("div", "legend");
        //     return div;
        // };
        // info.addTo(map);
        
    


    
// function createMap(earthquake){

// }

// function createMarkers(response){
//     var point_coords = response.features.coordinates;
//     var magnitud = response.features.magnitud;

//     var earthquake_data=[];

//     for (var index=0; index<point_coord; index++){
//         var point_coord =point_coords[index];
    
//     var location =L.marker([point_coord.coordinates[0],point_coords.coordinates[1]]).bindPopup("<h3>" + magnitud + "<h3>");
    
//     earthquake_data.push(location);
//     }

//     createMap(L.layerGroup(earthquake_data));
// }
