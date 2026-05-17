const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input'); //grabs the classes of search, btn, input

btn.addEventListener('click', () => {   //creates event listener on the button to check for clicks
    search.classList.toggle('active');  //takes the search div and toggles(adds/removes) the active class
    input.focus();  //sets focus on the input
})