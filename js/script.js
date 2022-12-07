function initMap() {
    var mapCenter = new google.maps.LatLng(40.23175547478395, -89.49721984005868);

    let map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 4,
        mapTypeId: 'satellite'
    });

    new google.maps.Marker({
        position: new google.maps.LatLng(41.835252597261906, -87.62579957391424),
        map,
        label: "My School",
        animation: google.maps.Animation.DROP
    });
    
    new google.maps.Marker({
        position: new google.maps.LatLng(41.843623955764464, -87.64823815014381),
        map,
        label: "My City",
        animation: google.maps.Animation.DROP
    });

    new google.maps.Marker({
        position: new google.maps.LatLng(41.51121443857638, -87.96882104828151),
        map,
        label: "My Hometown",
        animation: google.maps.Animation.DROP
    });
}

window.initMap = initMap;

const slide = document.getElementById("image-track")

window.onmousedown = e => {
    slide.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    slide.dataset.mouseDownAt = "0";
    slide.dataset.prevPercentage = slide.dataset.percentage;
}

window.onmousemove = e => {
    if(slide.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(slide.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(slide.dataset.prevpercentage) + percentage;
    slide.dataset.percentage = nextPercentage;
    slide.style.transform = 'translate(${nextPercentage}%, -50%)';

}