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


//Part 1
var gsImage = new SimpleImage('drewRobert.png')
var bgImage = new SimpleImage('hippieflower.jpg')
var output = new SimpleImage(gsImage.getWidth(), gsImage.getHeight());

for (var pixel of gsImage.values()) {
    if(pixel.getGreen() > 230) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        
        output.setPixel(x, y, bgPixel);
    } else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}
print(output);

//Part 2
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y > img.getHeight()/2){
    px.setBlue(255);
  }
  else if (x > img.getWidth()/2){
    px.setGreen(255);
  }
}
print(img);

//Part 3
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
}

function addBorder(image, width) {
    for(var pixel of image.values()) {
        if((pixel.getX() + width) >= image.getWidth() || (pixel.getX() <= width)) {
            setBlack(pixel);
        }
        if((pixel.getY() + width) >= image.getHeight() || (pixel.getY() <= width)) {
            setBlack(pixel);
        }
    }
}

var image = new SimpleImage("chapel.png");
addBorder(image, 10);
print(image);
print(duke);