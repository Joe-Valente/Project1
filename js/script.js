function initMap() {
    let heatMapData = [
        {location: new google.maps.LatLng(45.3878542760081, 9.102480799850031), weight: 20},
        {location: new google.maps.LatLng(41.79419061347077, 15.792198125186632), weight: 100},
        {location: new google.maps.LatLng(43.80414676218229, 10.590012571803733), weight: 5},
        {location: new google.maps.LatLng(45.5431975371664, 7.703749296801359), weight: 5},
        {location: new google.maps.LatLng(41.90053741204387, 12.663939408477734), weight: 10},
        {location: new google.maps.LatLng(40.93644122007601, 14.380444579805754), weight: 10},
        {location: new google.maps.LatLng(51.692772232624904, 0.183181201387284), weight: 5},
        {location: new google.maps.LatLng(51.77960598988388, -1.2626737319143047), weight: 10},
        {location: new google.maps.LatLng(53.43465992942041, -6.3749376857078675), weight: 10},
        {location: new google.maps.LatLng(39.150468007087305, 16.412676496245822), weight: 5},
        {location: new google.maps.LatLng(47.419349920921086, 8.500551836854237), weight: 4},
        {location: new google.maps.LatLng(52.75625482547655, 13.489835104765335), weight: 6},
        {location: new google.maps.LatLng(52.35020638083362, 21.105883492318974), weight: 3},
        {location: new google.maps.LatLng(50.230741633392604, 19.875476728683804), weight: 6},
        {location: new google.maps.LatLng(52.75625482547655, 13.489835104765335), weight: 6},
    ];


    var mapCenter = new google.maps.LatLng(51.3576264091386, 9.725491529819658);

    let map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 4,
        mapTypeId: 'satellite'
    });

    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
        radius: 30
    });

    new google.maps.Marker({
        position: new google.maps.LatLng(45.47859954420433, 9.227346521619015),
        map,
        label: "My University!",
        animation: google.maps.Animation.DROP
    });

    new google.maps.Marker({
        position: new google.maps.LatLng(41.706726987438124, 15.724500633770807),
        map,
        label: "My Hometown!",
        animation: google.maps.Animation.DROP
    });
    heatmap.setMap(map);
}

window.initMap = initMap;