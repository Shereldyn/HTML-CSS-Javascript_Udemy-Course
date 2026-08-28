const boxes = document.querySelectorAll('.box');    //brings all the boxes into the script in an array or node list

window.addEventListener('scroll', checkBoxes); //*listens for the scroll event and calls the checkBoxes function

checkBoxes(); //calls the checkBoxes function on page load to check the position of the boxes
//*when commented out, the boxes will not be checked on page load and will only be checked when the user scrolls

function checkBoxes() {
    //*checks the position of each box relative to the viewport and adds or removes the 'show' class based on whether the box is in view
    ////console.log(window.innerHeight);
    //logs the height of the window to the console
    const triggerBottom = window.innerHeight / 5 * 4; //sets the trigger point variable for the animation to 4/5 of the window height

    boxes.forEach(box => {
        //*loops through each box and checks its position relative to the trigger point
        const boxTop = box.getBoundingClientRect().top; //gets the distance from the top of the box to the top of the viewport

        if (boxTop < triggerBottom) {
            //*if the top of the box is above the trigger point, add the 'show' class to the box
            box.classList.add('show'); //adds the 'show' class to the box if it is in view
        } else {
            box.classList.remove('show'); //removes the 'show' class from the box if it is not in view
        }
    })
}

/*
Mentioned in the video:

A lot of people use jQuery for something like this or a library like animate on scroll.

Animate on scroll is a really cool library and if you want to do some random stuff, then you can use that.

However, if it's something simple and you're just bringing in elements when you scroll down, this is very lightweight, no extra libraries or anything and it's really easy to do.
*/