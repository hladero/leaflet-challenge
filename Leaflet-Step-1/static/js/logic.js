url= 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson'

var map=L.

function createMap(earthquake){



}




function createMarkers(response){
    var point_coords = response.type.coordinates;
    var magnitud = response.features.magnitud;

    var earthquake_data=[];

    for (var index=0; index<point_coord; index++){
        var point_coord =point_coords[index];
    }
}