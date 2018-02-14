/*=====================================
1. Array of 4 colors
2. For each color
    * Show 6 variations of the color using tinyColor
======================================= */

const tinyColor = require('tinyColor2');
const tinyColor = 
let colorArray = [];

for (let i = 0; i < 4; i++) {
    colorArray.push(tinyColor.random());
}
console.log(colorArray);

document.querySelector('color1').value = colorArray;