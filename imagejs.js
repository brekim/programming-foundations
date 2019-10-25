var image = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var canvas;

function upload() {
    var fileInput = document.getElementById("finput");
    canvas = document.getElementById("can");

    var image = new SimpleImage(fileInput);
    var grayImage = new SimpleImage(fileInput);
    var redImage = new SimpleImage(fileInput);
    var rainbowImage = new SimpleImage(fileInput);

    initImages();

    image.drawTo(canvas);
}

function initImages() {
    //Write code to grayscale and such here
}