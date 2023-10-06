import * as THREE from "three";

import plage from "../img/plage.jpg";

const canvas = document.getElementById("plage");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = plage;

img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.moveTo(50, 275);
    ctx.lineTo(100, 275);
    ctx.lineTo(100, 75);
    ctx.fill();


    ctx.fillStyle = "orange"
    ctx.beginPath();
    ctx.moveTo(110, 275);
    ctx.lineTo(110, 150);
    ctx.lineTo(160, 275);
    ctx.fill();

    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.moveTo(60, 285);
    ctx.lineTo(150, 285);
    ctx.lineTo((60+150)/2, 300);
    ctx.fill();

    ctx.fillStyle = "yellow"
    ctx.beginPath();
    ctx.arc(canvas.width-50, 50, 20, 0, Math.PI*2)
    ctx.fill();
}




const threeContainer = document.getElementsByClassName("container")[1];
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 500 / 500, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 500, 500 );
threeContainer.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();