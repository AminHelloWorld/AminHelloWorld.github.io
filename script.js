function lonLatSucces(pos){
    var crd = pos.coords;

    document.getElementById('lonRes').textContent = crd.longitude;
    document.getElementById('latRes').textContent = crd.latitude;
    document.getElementById('altRes').textContent = crd.altitude;
    


}

function lonLatError(err){
    console.error(err);
}

var lonLatOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };





document.addEventListener("DOMContentLoaded", (event) => {
    navigator.geolocation.getCurrentPosition(lonLatSucces,lonLatError, lonLatOptions);
});