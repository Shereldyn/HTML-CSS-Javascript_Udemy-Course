const tagContainer = document.getElementById('tags');   //container where the tags are displayed
const textArea = document.getElementById('textarea');   //input area where the user types choices

textArea.focus(); //automatically puts the cursor on the textarea

textArea.addEventListener('keyup', (e) => { //listens for the user to release a key to start running
    createTags(e.target.value); //calls function that turns current text into visible tags.

    if (e.key === 'Enter') {    //checks if the pressed key was Enter
        setTimeout(() => {
            e.target.value = '';
        }, 10)  //waits 10 milliseconds then clears textarea

        randomSelect(); //starts random selection animation
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());  /*
    # takes full text from text area as one string
    # separates text into different choices using the comma and and place them in an array
    # creates a new array(tags[]) where empty strings are removed
    # trims whitespace around each item and returns the transformed items to the array(tags[])
    
    ////console.log(tags); checking code
    */

    tagContainer.innerHTML = '';    //clears the text area

    tags.forEach(tag => {
        const tagElement = document.createElement('span');    //for each tag, creates a new span element
        tagElement.classList.add('tag');  //adds a class to the element
        tagElement.innerText = tag;   //sets the inner text to whatever the tag is
        tagContainer.appendChild(tagElement); //adds each of the tag elements to the container so they appear on the webpage
    });
}

function randomSelect() {
    const times = 30;   //will be used to set the number of times the flashing animation will run

    const interval = setInterval(() => {    //setInterval repeatedly runs the code inside it every 100 milliseconds  
        const randomTag = pickRandomTag();  //picks a random tag

        highlightTag(randomTag);    //highlights random tag

        setTimeout(() => {  //after a delay of 100 milliseconds
            unHighlightTag(randomTag);   //removes highlight
        }, 100);
    }, 100);    //*this code all together results in a fast flickering effect on the choices

    setTimeout(() => {  //after a delay of 30 rounds this block of code runs
        clearInterval(interval);    //stops the flashing animation

        setTimeout(() => {  //100 milliseconds after the 
            const randomTag = pickRandomTag();  //picks one final random tag

            highlightTag(randomTag);    //highlights random tag
        })
    }, times * 100);    /* 
    ** times * 100 = 30 × 100 = 3000 milliseconds = 3 seconds*/
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag'); //finds all elements with the class .tag
    return tags[Math.floor(Math.random() * tags.length)];   /* chooses a random tag and returns selected tag element
    # Math.random() gives a number between 0 and 1
        # multiplied by tags.length gives a random index
            # Math.floor() turns it into an integer index (because we used .random() the final index is random)
    */
}

function highlightTag(tag) {
    tag.classList.add('highlight'); //highlights selected tag
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');  //removes highlight from previous selected tag
}