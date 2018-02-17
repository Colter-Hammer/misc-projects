/**=======================================================================
* Create the array of different colors

* 1. git the value of the input and save it to an array with .split()
* 2. forEach the array
*      a. inside the forEach use tinycolor to get all the properties of the given colors, and push them to an array. 
* 3. Call a function that gets the 6 variations of the colors given
*      a. Use monochromatic to create the variations
*      b. return an array of arrays consisting of the different colors
* 4. Call a function to set the colors to the div elements in the HTML
*      a. 
========================================================================= */

// Variables

let colors;
let tiny = [];
let variation = [];
let arr = [];

function main() {
    colors = document.querySelector('#input1').value.split(',');

    // Check colors to make sure they are showing up correctly
    console.log(colors);

    colors.forEach(color => {
        tiny.push(tinycolor(color));
    });

    // call monochromatic() to get variations of the colors
    // return an array of varied colors
    monochromatic(tiny);

    // change from HSV code to hex
    toHex(variation);
    console.log(arr);

    // Apply hex code to div background
    applyHex(arr);
}

// monochromatic returns 6 variations of the colors given
function monochromatic(color) {
    color.forEach(color => {
        variation.push(color.monochromatic());
    });
    return variation;
}

// change from HSV to hex
function toHex(array) {
    for (let i = 0; i < array.length; i++) {
        arr[i] = array[i].map(hsv => hsv.toHexString());
        console.log(arr[i]);
    }
    return arr;
}

// apply hex code to div background color
function applyHex(arr) {
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 6; i++) {
            document.querySelector(`.color${[j+1]}-${[i+1]}`).style.backgroundColor = arr[j][i];
            document.querySelector(`.display${[j+1]}-${[i+1]}`).innerHTML = arr[j][i];
            console.log(arr[j][i]);
        }
    }
}