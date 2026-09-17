const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; //array for all the sound effects

sounds.forEach(sound => {
    //loops through each sound
    const btn = document.createElement('button');   //created button and assigned to a variable
    btn.classList.add('btn');   //adds the button to the classlist for each iteration of the loop

    btn.innerText = sound;  //assigns the current value in the sound loop to the inner text of the current button

    document.getElementById('buttons').appendChild(btn);    //appends the button to the div with the id of buttons
})