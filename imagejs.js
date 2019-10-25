var image = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var canvas;

function upload() {
    var fileInput = document.getElementById("finput");
    canvas = document.getElementById("can");

    image = new SimpleImage(fileInput);
    grayImage = new SimpleImage(fileInput);
    redImage = new SimpleImage(fileInput);
    rainbowImage = new SimpleImage(fileInput);

    image.drawTo(canvas);
}

function grayscale() {
    if(grayImage == null) {
        alert("Image unavailable to filter");
    }

    for(var pixel of grayImage.values()) {
        var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;

        pixel.setRed(average);
        pixel.setBlue(average);
        pixel.setGreen(average);
    }

    canvas = document.getElementById("can");
    grayImage.drawTo(canvas);
}

function redhaze() {
    if(redImage == null) {
        alert("Image unavailable to filter");
    }

    for(var pixel of redImage.values()) {
        pixel.setBlue(0);
        pixel.setGreen(0);
    }

    canvas = document.getElementById("can");
    redImage.drawTo(canvas);
}

function reset() {
    canvas = document.getElementById("can");
    image.drawTo(canvas);
}