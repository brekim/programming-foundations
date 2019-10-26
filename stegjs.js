/*
* To be used with the Duke IDE online
* http://www.dukelearntoprogram.com/course1/example/index.php
*/

var start = new SimpleImage('img/grid.jpg');
var hide = new SimpleImage('img/workshop.png');

function cropImage(image, width, height) {
    var newImage = new SimpleImage(width, height);
    
    for(var pixel of image.values()) {
        if(pixel.getY() < height && pixel.getX() < width) {
            newImage.setPixel(pixel.getX(), pixel.getY(), pixel);
        }
    }

    return newImage;
}

function chopToHide(image) {
    for(var pixel of image.values()) {
        pixel.setRed(clearBits(pixel.getRed()));
        pixel.setGreen(clearBits(pixel.getGreen()));
        pixel.setBlue(clearBits(pixel.getBlue()));
    }
    
    return image;
}

function clearBits(colorval) {
    var x = Math.floor(colorval/16)*16;
    return x;
}

function shift(image) {
    for(var pixel of image.values()) {
        pixel.setRed(pixel.getRed() / 16);
        pixel.setGreen(pixel.getGreen() / 16);
        pixel.setBlue(pixel.getBlue() / 16);
    }
    
    return image;
}

function combine(show, hide) {
    var answer = new SimpleImage(show.getWidth(), show.getHeight());
    
    for(var pixel of answer.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        
        var showPixel = show.getPixel(x, y);
        var hidePixel = hide.getPixel(x, y);
        
        pixel.setRed(showPixel.getRed() + hidePixel.getRed());
        pixel.setGreen(showPixel.getGreen() + hidePixel.getGreen());
        pixel.setBlue(showPixel.getBlue() + hidePixel.getBlue());
    }
    
    return answer;
}


hide = cropImage(hide, start.getWidth(), start.getHeight());
start = chopToHide(start);
hide = shift(hide);
var ans = combine(start, hide);

canvas = document.getElementById('can');
ans.drawTo(canvas);