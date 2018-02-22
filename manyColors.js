// /**=======================================================================
// * Create the array of different colors

// * 1. get the value of the input and save it to an array with .split()
// * 2. forEach the array  
// *      a. inside the forEach use tinycolor to get all the properties of the given colors, and push them to an array. 
// * 3. Call a function that gets the 6 variations of the colors given
// *      a. Use monochromatic to create the variations  
// *      b. return an array of arrays consisting of the different colors  
// * 4. Call a function to set the colors to the div elements in the HTML  
// ========================================================================= */
/* eslint no-unused-vars:0, no-console:0, quotes: 0 */

/** 
 * 1. Apply the tinycolor library to the value received as a parameter.
 * 2. Call the tinycolor.monochromatic function which will give variations of the color to an amount specified as a parameter.
 * 3. Sort the colors given through monochromatic in order from darkest from lightest.
 * 4. change all the colors given to their respective hex code.
 
 
 receives as input a color, and returns an array of variations of those colors using the tinycolor.monochromatic library. Sorted colors from darkest to lightest.
 */

function convertColor(colorValue) {
    let amount = document.querySelector('#colorVariation').value,
        colorArray = tinycolor(colorValue)
        // gets arrays of colors from library allowing
            .monochromatic(amount)
            // sort colors from monochromatic from dark to light
            .sort((a, b) => a.getLuminance() - b.getLuminance())
            // change from previous format to hex
            .map(color => color.toHexString());

    return colorArray;
}

/**
 * 
 * 
 * @param {array} colorList the array of colors to be made into HTML script  
 */
function makeColorDivHTML(colorList) {
    let htmlOut = '<div class="colors">';
    // make the html for each color in the array and then join to one big string
    htmlOut += colorList
        .map(color => `<div class="color" style="background-color: ${color};">${color}</div>`)
        .join('');

    // Add the created html tag to the div container
    htmlOut += '</div>';
    return htmlOut;
}

function main() {
    let htmlString,
        colors = document.querySelector('#colorInput').value.split('\n');

    htmlString = colors
        // Returns a multilayered array of the hex codes for the colors and variations
        .map(convertColor)

        // Returns a single array containing all the divs created in makeColorDivHTML function
        .map(makeColorDivHTML)

        // Takes the array and joins it into one long string without the commas
        .join('');

    document.querySelector(`#colorSquares`).innerHTML = htmlString;

    console.log(htmlString);
}

document.querySelector('#things').addEventListener('click', main);