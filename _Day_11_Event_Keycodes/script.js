const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `;
})

/*
*.keyCode is struck through because the property is deprecated, at this point in time the property still works

// window.addEventListener('keydown', (e) => {
//     console.log(e);
// })
shows how we get the properties

${event.key === ' ' ? 'Space' : event.key}
*this is a ternary, it's a shorthand, conditional
** event.key === ' '    : tests to see if keydown equals an empty string
** ?    : then
** 'Space'  : put out space
** :    : else
** e.key}   : whatever the key is
#The breakdown of this code is essentially if the event key is an empty string then it displays the word Space, else it displays whichever the key is
*/