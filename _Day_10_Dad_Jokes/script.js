const jokeEl = document.getElementById('joke'); //finds joke
const jokeBtn = document.getElementById('jokeBtn'); //finds button

jokeBtn.addEventListener('click', generateJoke);    //runs generateJoke when the button is clicked and once immediately when the page loads

generateJoke();

//USING async/await
async function generateJoke() { //defines function that gets the joke, async allows the function to use await
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }   //*Creates request settings telling the API that the program wants a JSON response.
    //can add chunks of code like this in variables to make it a bit cleaner

    const response = await fetch('https://icanhazdadjoke.com', config)  //Creates request settings telling the API that the program wants a JSON response.

    const data = await response.json(); //Converts the response into usable JavaScript data.

    jokeEl.innerHTML = data.joke;   //Displays the joke in the HTML element with the ID joke.
}

// USING .then()
//// function generateJoke() {
////     const config = {
////         headers: {
////             'Accept': 'application/json'
////         }
////     }   //*can add something like this in variables to make it a bit cleaner

////     fetch('https://icanhazdadjoke.com', config)
////         .then(res => res.json())
////         .then(data => {
////             jokeEl.innerHTML = data.joke;
////         })
//// }
//the code above is not preferred because there are multiple asynchronous steps

/*
*When we are sending an HTTP request to the 3rd party API we will need to change the default response(text/html) to application/json.
*To do so we will need to send a header while sending the http request.
*As a result we will send a header of accept = application/JSON
There's many different ways to make requests:
- We're going to use fetch within our application
- We could even use Curl, which is a terminal program
A nice tool to work with is Postman, you may have to download it

Methods:
*GET - you're getting data or something from the server
*POST - used when submitting data e.g submitting a contact form or like adding a new blog post
*PUT/PATCH - updating data that's on the server
*DELETE - deletes data on the server

possible URL for PostMan is: getpostman.com
*/