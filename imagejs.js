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
        var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;

        if(average < 128) {
            pixel.setRed(2 * average);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen((2 * average) - 255);
            pixel.setBlue((2 * average) - 255);
        }
    }

    canvas = document.getElementById("can");
    redImage.drawTo(canvas);
}

function rainbow() {
    if(rainbowImage == null) {
        alert("Image unavailable to filter");
    }

    for(var pixel of rainbowImage.values()) {
        var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;

        if(pixel.getY() > (rainbowImage.getHeight() / 7)*6) {
            if(average < 128) {
                pixel.setRed(1.6 * average);
                pixel.setGreen(0);
                pixel.setBlue(1.6 * average);
            } else {
                pixel.setRed(0.4 * average + 153);
                pixel.setGreen(2 * average - 255);
                pixel.setBlue(0.4 * average + 153);
            }
        } else if(pixel.getY() > (rainbowImage.getHeight() / 7)*5) {
            if(average < 128) {
                pixel.setRed(0.8 * average);
                pixel.setGreen(0);
                pixel.setBlue(2 * average);
            } else {
                pixel.setRed(1.2 * average - 51);
                pixel.setGreen(2 * average - 255);
                pixel.setBlue(255);
            }
        } else if(pixel.getY() > (rainbowImage.getHeight() / 7)*4) {
            if(average < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * average);
            } else {
                pixel.setRed(2 * average - 255);
                pixel.setGreen(2 * average - 255);
                pixel.setBlue(255);
            }
        } else if(pixel.getY() > (rainbowImage.getHeight() / 7)*3) {
            if(average < 128) {
                pixel.setRed(0);
                pixel.setGreen(2 * average);
                pixel.setBlue(0);
            } else {
                pixel.setRed(2 * average - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * average - 255);
            }
        } else if(pixel.getY() > (rainbowImage.getHeight() / 7)*2) {
            if(average < 128) {
                pixel.setRed(2 * average);
                pixel.setGreen(2 * average);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * average - 255);
            }
        } else if(pixel.getY() > (rainbowImage.getHeight() / 7)*1) {
            if(average < 128) {
                pixel.setRed(2 * average);
                pixel.setGreen(0.8 * average);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(1.2 * average - 51);
                pixel.setBlue(2 * average - 255);
            }
        } else {
            if(average < 128) {
                pixel.setRed(2 * average);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * average - 255);
                pixel.setBlue(2 * average - 255);
            }
        }
    }

    canvas = document.getElementById("can");
    rainbowImage.drawTo(canvas);
}

function reset() {
    canvas = document.getElementById("can");
    image.drawTo(canvas);
}