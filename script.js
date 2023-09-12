function lonLatSucces(pos) {
    var crd = pos.coords;

    document.getElementById('lonRes').textContent = (crd.longitude).toFixed(2);
    document.getElementById('latRes').textContent = (crd.latitude).toFixed(2);
    document.getElementById('altRes').textContent = (crd.altitude).toFixed(2);
    document.getElementById('vitRes').textContent = (crd.speed).toFixed(2);



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
    document.getElementById('alphaRes').textContent = (rotateDegrees).toFixed(2);
    document.getElementById('betaRes').textContent = (frontToBack).toFixed(2);
    document.getElementById('gammaRes').textContent = (leftToRight).toFixed(2);

};
function handleMotionEvent(event){
    document.getElementById('accRes').innerHTML = `x : ${(event.accelerationIncludingGravity.x).toFixed(2)},<br></br> y : ${(event.accelerationIncludingGravity.y).toFixed(2)},<br></br> z : ${(event.accelerationIncludingGravity.z).toFixed(2)} `;
    document.getElementById('rotRes').innerHTML = `x : ${(event.rotationRate.x).toFixed(2)},<br></br> y : ${(event.rotationRate.y).toFixed(2)},<br></br> z : ${(event.rotationRate.z).toFixed(2)} `;

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
