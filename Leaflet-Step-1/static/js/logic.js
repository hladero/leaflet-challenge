

function createMap(earthquake){
    var map= L.map("map-id",{
        center: [point_coord.coordinates[0], point_coord.coordinates[1]],
        zoom:12,
    });

}

function createMarkers(response){
    var point_coords = response.type.coordinates;
    var magnitud = response.features.magnitud;

    var earthquake_data=[];

    for (var index=0; index<point_coord; index++){
        var point_coord =point_coords[index];
    
    var location =L.marker([point_coord.coordinates[0],point_coords.coordinates[1]]).bindPopup("<h3>" + magnitud + "<h3>");
    
    earthquake_data.push(location);
    }

    createMap(L.layerGroup(earthquake_data));
}

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson").then(createMarkers);