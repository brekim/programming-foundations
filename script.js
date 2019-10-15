//Substitute print() for console.log when running on Dukelearntoprogram.com
var x = 3;
var y = 4;
var z = x + 2 * y;

console.log(x);
console.log(y);
console.log(z);

//Creating own function
function square(x) {
    var ans = x * x;
    return ans;
}

y = square(2);
console.log(y);

y = square(44);
console.log(y);

//Duke Course-Specific Functions

var image = new SimpleImage("img/workshop.png")

var width = image.getWidth();
var height = image.getHeight();
var pixel = image.getPixel(200, 200);

var redPix = pixel.getRed();
var greenPix = pixel.getGreen();
var bluePix = pixel.getBlue();

console.log(width);
console.log(height);

console.log(redPix);
console.log(greenPix);
console.log(bluePix);

//More Duke-Specific Functions
var img = new SimpleImage(200, 200);

for(var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
    pixel.setAlpha(100);
}

print(img);

//Filter
var skyline = new SimpleImage("skyline.jpg");

for(var pixel of skyline.values()) {
    if(pixel.getX() < skyline.getWidth() / 3) {
        pixel.setRed(255);
    }
    else if(pixel.getX() < (skyline.getWidth() / 3)*2) {
        pixel.setGreen(255);
    }
    else {
        pixel.setBlue(255);
    }
}

print(skyline);

//Swap
var skyline2 = new SimpleImage("skyline.jpg");

function swapRedGreen(pixel) {
    var oldRed = pixel.getRed();
    var oldGreen = pixel.getGreen();
    
    pixel.setRed(oldGreen);
    pixel.setGreen(oldRed);
}

for(var pixel of skyline2.values()) {
    swapRedGreen(pixel);
}

print(skyline2);

//Duke Devil
var duke = new SimpleImage("duke_blue_devil.png");

for(var pixel of duke.values()) {
    if(pixel.getBlue() != 255) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

print(duke);