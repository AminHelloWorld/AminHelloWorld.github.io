function lonLatSucces(pos) {
    var crd = pos.coords;

    document.getElementById('lonRes').textContent = crd.longitude;
    document.getElementById('latRes').textContent = crd.latitude;
    document.getElementById('altRes').textContent = crd.altitude;
    document.getElementById('vitRes').textContent = crd.speed;



}

function lonLatError(err) {
    console.error(err);
}

var lonLatOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};


var handleOrientationEvent = function (
    frontToBack,
    leftToRight,
    rotateDegrees,
) {
    document.getElementById('alphaRes').textContent = rotateDegrees;
    document.getElementById('betaRes').textContent = frontToBack;
    document.getElementById('gammaRes').textContent = leftToRight;

};
function handleMotionEvent(event){
    document.getElementById('accRes').textContent = event.accelerationIncludingGravity;
    document.getElementById('rotRes').textContent = event.rotationRate;

}




document.addEventListener("DOMContentLoaded", (event) => {
    navigator.geolocation.getCurrentPosition(lonLatSucces, lonLatError, lonLatOptions);
});

if (window.DeviceOrientationEvent) {
    window.addEventListener(
        "deviceorientation",
        function (event) {
            // alpha : rotation autour de l'axe z
            var rotateDegrees = event.alpha;
            // gamma : de gauche à droite
            var leftToRight = event.gamma;
            // bêta : mouvement avant-arrière
            var frontToBack = event.beta;

            handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        },
        true,
    );
}

window.addEventListener("devicemotion", handleMotionEvent, true);
