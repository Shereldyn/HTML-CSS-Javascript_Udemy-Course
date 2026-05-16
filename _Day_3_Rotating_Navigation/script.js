const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container'); //Creates variable for the elements 'open', 'close' and the class 'container'
//*when calling a class use 'document.querySelector(.className) or add an ID'

open.addEventListener('click', () => container.classList.add('show-nav'))   //creates an eventListener to listen for a click and when clicked we run an arrow function then add the 'show-nav' to the classList of 'container'

close.addEventListener('click', () => container.classList.remove('show-nav'))   //creates an eventListener to listen for a click and when clicked we run an arrow function then remove the 'show-nav' from the classList of 'container'


/**Code so that we have the functionality where we the nav buttons we'll be able to add or remove the 'show-nav' tag so that the page will rotate accordingly*/