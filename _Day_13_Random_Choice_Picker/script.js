const tagContainer = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus(); //automatically puts the cursor on the textarea

textArea.addEventListener('keyup', (e) => { //listens for press a button and let go to start the picking
    createTags(e.target.value); //calls function
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());  /*
    # seperates text into different choices using the comma and makes it an array
    # filters text to remove whitespaces and makes sure array is NOT an empty string after trimming whitespaces
    # trims any whitespaces
    
    ////console.log(tags); checking code
    */

    tagContainer.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');    //for each tag creates an element
        tagElement.classList.add('tag');  //adds a class to the element
        tagElement.innerText = tag;   //sets the innertext to whatever the tag is
        tagContainer.appendChild(tagElement); //adds each of the tag elements into the webpage
    });
}