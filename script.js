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