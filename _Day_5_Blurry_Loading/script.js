const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// brings in the loading text and the background image from the HTML file

let load = 0;   //initializes the load variable to 0

let int = setInterval(blurring, 30); //* sets the interval to call the blurring function every 30 milliseconds

function blurring() {
    load++; // increments by 1 each time the function is called

    if (load > 99) { //* if the load variable is greater than 99, then we want to clear the interval so that it stops calling the function
        clearInterval(int); //* clears the interval so that it stops calling the function
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //* sets the opacity of the loading text to go from 1 to 0(decreasing in opacity) as the load variable goes from 0 to 100
    ////console.log(load); 
    // was used to check the load variable in the console and allowed us to see that without the if statement, it would go to 100 and then keep going up to infinity, but with the if statement, it stops at 100

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; //* applies and sets the blur of the background image to go from 30px to 0px as the load variable goes from 0 to 100
    /*
    **bg refers to the background element selected from the HTML.
    **style.filter changes its CSS filter.
    **scale(load, 0, 100, 30, 0) converts load from the range 0–100 into a blur amount from 30px–0px.
    **The template literal inserts that value into blur(...).
    As loading increases, the background gradually becomes less blurry.
    */
}


/*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
* was used as a reference to create the scale function that allows us to map the load variable from 0 to 100 to a new range of numbers, in this case, from 1 to 0 for the opacity of the loading text
*/
const scale = (num, in_min, in_max, out_min, out_max) => {
    /*
    ** num = current load value
    ** in_min = 0, in_max = 100
    ** out_min = 1, out_max = 0     and/or      out_min = 30, out_max = 0 (for the blur of the background image)
    * creates a function that takes in a number and maps it from one range to another
    */

    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    /*
    The formula works in four steps:
    # num - in_min finds the number’s position in the input range.
    # out_max - out_min finds the size and direction of the output range.
    # Dividing by in_max - in_min converts the position proportionally.
    # Adding out_min shifts the result to the output range.

    For example, when load is 25:
    ** (25 - 0) * (0 - 1) / (100 - 0) + 1
    ** = 25 * -1 / 100 + 1
    ** = 0.75

    Therefore, the text has an opacity of 0.75. At load = 0, opacity is 1; at load = 100, opacity is 0.
    */
};


/*
Now we want to work on actually having the percentage change, so we want it to go from 0 to 100 and then the background image is going to start blurry and then it's going to go to clear as the page loads.
*/