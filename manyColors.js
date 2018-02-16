/*=====================================
1. Array of 4 colors
2. For each color
    * Show 6 variations of the color using tinyColor
======================================= */
let colors;
let hexColors;
let tiny = [];

function things() {
    colors = document.querySelector('#input1').value.split(',');
    console.log(colors);
    // colors.forEach(color => {
    //     console.log(tinycolor(color).getOriginalInput);
    // });
    colors.forEach(color => {
        tiny.push(tinycolor(color));
    });
}
