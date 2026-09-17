const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; //array for all the sound effects
let currentSound = null;

sounds.forEach(sound => {
    //loops through each sound
    const btn = document.createElement('button');   //created button and assigned to a variable
    btn.classList.add('btn');   //adds the button to the classlist for each iteration of the loop

    btn.innerText = sound;  //assigns the current value in the sound loop to the inner text of the current button

    btn.addEventListener('click', () => {
        //*This approach pauses and resets currentSound before assigning and playing a new sound
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }

        currentSound = document.getElementById(sound);
        currentSound.play();
        ////currentSound.onplay();
        //!.onplay() was not used because it is used to run code when audio starts playing rather than starting the audio itself.

        /*
        //stopSongs();
        !called function which was an inefficient approach to stopping all sounds before playing another sound

        //document.getElementById(sound).play();
        assigned to current sound instead before playing sound
        */
    })

    document.getElementById('buttons').appendChild(btn);    //Finds the HTML element(container) with id="buttons" and places the newly created button inside it.
})

/*
    //function stopSongs() {
    //    sounds.forEach(sound => {
    //        const song = document.getElementById(sound);
    
    //        song.pause();
    //        ////song.onpause();
    //        song.currentTime = 0;
    //    })
    //}
    !Extremely inefficient approach to pausing any active audio before playing a new sound
    !This approach loops through each audio file and pauses them, this would cause a major performance hit if the list contained a large number of audio files
*/