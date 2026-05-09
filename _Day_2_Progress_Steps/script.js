const progress = document.getElementById('progress')    //calls and creates variable for the progress line
const prev = document.getElementById('prev')    //calls and creates variable for the button Previous
const next = document.getElementById('next')    //calls and creates variable for the button Next
const circles = document.querySelectorAll('.circle')    //calls and creates variable for the circle classes

let currentActive = 1   //creates index for whichever one is active which is set to 1 by default

next.addEventListener('click', () => {  //listens for a click and runs a function to move to the next step
    currentActive++ //increments the current active by 1

    if (currentActive > circles.length) {
        currentActive = circles.length  //ensures that if the current active is greater than the length of the progress line the 'currentActive' will equal the progress line length
    }
    //*remember that circles('class') is a node list and can be treated like an array
    //*incrementing-> '++'

    update()    //function
})

prev.addEventListener('click', () => {  //listens for a click and runs a function to move to the previous step
    currentActive--

    if (currentActive < 1) {
        currentActive = 1   //ensures that if the current active is less than 1, the 'currentActive' will equal 1
    }
    //*decrementing-> '--'

    update()    //function
})

function update() {
    circles.forEach((circle, idx) => {  //?loops through node list('circles') while taking note of the circle, index values
        if (idx < currentActive) {   //checks for each circle if the index is less than the current active
            circle.classList.add('active')  //if true then adds the active class to that circle
        } else {
            circle.classList.remove('active')   //if not then removes the active class
        }
    })

    const actives = document.querySelectorAll('.active')    //calls and creates variable for the active classes

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'  //?gets the % of the progress width(by setting width to 100) then ...
    //*active.length reveals the number of actives, whereas circles.active will always be 4 because that is thee number of circles present

    if (currentActive === 1) {  //check the current active is equal to 1
        prev.disabled = true    //if true previous button becomes disabled
    } else if (currentActive === circles.length) {  //if it equals the number of circles    (checks if it's at the end)
        next.disabled = true    //if true next button becomes disabled
    } else {    //if neither are true then both buttons are enabled
        prev.disabled = false
        next.disabled = false
    }
}

//can be used for in any kind of steps: shopping cart, any kind of form, etc.