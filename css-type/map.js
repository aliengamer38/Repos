function initMap() {
    let location = {
        latitude: -25.363,
        longitude: 131.044
    };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
    

}