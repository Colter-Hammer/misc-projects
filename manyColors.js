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


****do tomorrow****
* Add comments
* give the user an option of how many different color variations to output
* change map to use the number of variations
========================================================================= */
/* eslint no-unused-vars:0 */
function convertColor(colorValue) {
       
    let colorArray = tinycolor(colorValue)
        // gets arrays of colors based on
        .monochromatic(12)
        .sort((a, b) => a.getLuminance() - b.getLuminance())
        // lsdfjlskd
        .map(color => color.toHexString());

    return colorArray;
}

function makeColorDivHTML(colorList){
    let htmlOut = '<div class="colors">';
    // make the html for each color in the array and then join to one big string
    htmlOut += colorList
        .map(color => `<div class="color" style="background-color: ${color};" >${color}</div>`)
        .join('');


    htmlOut += '</div>';
    return htmlOut;
}



console.log('end:', convertColor('red'));

// // Variables
// let colors;
// let tiny;
// let variation;
// let arr;


function main() {
    let htmlString,
        colors = document.querySelector('#colorInput').value.split('\n');

    // add colors an array that uses the tinycolor format.
    htmlString = colors
        .map(convertColor)
        .map(makeColorDivHTML)
        .join('');

    document.querySelector(`#colorSquares`).innerHTML = htmlString;


    console.log(htmlString);


}

document.querySelector('#things').addEventListener('click', main);

// // monochromatic returns 6 variations of the colors given
// function monochromatic(color) {
//     variation = [];
//     color.forEach(color => {
//         variation.push(color.monochromatic());
//     });
//     return variation;
// }

// // change from HSV to hex
// function toHex(array) {
//     arr = [];
//     for (let i = 0; i < array.length; i++) {
//         arr[i] = array[i].map(hsv => hsv.toHexString());
//         // console.log(arr[i]);
//     }
//     return arr;
// }

// // apply hex code to div background color
// function applyHex(arr) {
//     for (let j = 0; j < tiny.length; j++) {
//         for (let i = 0; i < 6; i++) {
//             document.querySelector(`.color${[j+1]}-${[i+1]}`).style.backgroundColor = arr[j][i];
//             document.querySelector(`.color${[j+1]}-${[i+1]}`).innerHTML = arr[j][i];
//         }
//     }
// }

// // function reset() {
// //     for (let j = 0; j < tiny.length; j++) {
// //         for (let i = 0; i < 6; i++) {
// //             document.querySelector(`.color${[j+1]}-${[i+1]}`).style.backgroundColor = 'white';
// //             document.querySelector(`.color${[j+1]}-${[i+1]}`).innerHTML = '';
// //         }
// //     }
// // }