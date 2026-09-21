# Day 10 Dad Jokes

## **Description of project**

-   We're going to build a dad joke application where it gives a joke.
-   We click a button to get a new joke and we keep getting new jokes.
-   We get the jokes from a third party API at [icanhazdadjoke.com](https://icanhazdadjoke.com).
-   If you go to that URL \api, we will see the documentation for the api.
-   We going to use the *<b>fetchAPI</b>* that's built into the browser to make a request and get an object with an ID, a joke and a status.
-   We will then take that joke and put it into our application.
-   There will be a section in the project that strictly goes over HTTP requests in response, how that works as well as how *<b>fetchAPI</b>* works.
-   We will then build our interface with HTML and CSS, then add our Javascript.
-   We will then see how to use `fetch` normally and how to also use it with something called a **sink weight**, because when you deal with *`fetch`, you deal with something called **promises**.


## **Coding Notes**

>   ### Notes
>The *<b>API</b>* we're working with is just Application Programming Interface.
>We're working with something called the *<b>JSON API</b>*.
>It serves *<b>JSON</b>* data, which is essentially like a JavaScript object.
>
>This is an example of what the JSON data looks like.
>```JS
>{
>  "id": "R7UfaahVfFd",
>  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
>  "status": 200
>}
>```
>*<b>JSON</b>* uses curly brackets and within them theres double quotes on the keys and values, in this example you can see it is just an object with an id, a joke and a status.

## *<b>JAVASCRIPT</b>*

### *<b>Fetch API</b>*

The *<b>Fetch API</b>* provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global `fetch()` method that provides an easy, logical way to fetch resources asynchronously across the network.

We don't need to *fetch* a 3rd party API like in this project, we could build our own API with <b>Express, Node.js or Python, Django, PHP or Laravel</b>, etc. Or we can just get standard JSON files with `fetch()`.

When you call fetch to a URL, it returns a promise because it fetches data asynchronously. The following is an example of the code that could be used in this project:

```JS
fetch(URL)
    .then(response => response.json())  //tells them that you want the JSON data
    .then(data => console.log(data));   //2nd promise, this gives us the actual data

//This is a GET request by default
//There's a different syntax that can be used instead of .then(), it's called single weight which might make it a little cleaner
```

If we wanted to make a post or put request, we would pass the URL just as we did above but then there'd be extra options: value or object and then we'd pass in the method that we want.

>You can check the network tab on the console log when you need to check the data that you get back when you make any kind of request.

### Difference between <b>async/await</b> syntax and <b>Promise chaining / Promise`.then()`</b> syntax in this project.

Lines 8–20 use **`async`/`await`**:

```js
const response = await fetch(url, config);
const data = await response.json();
jokeEl.innerHTML = data.joke;
```
This reads like normal, step-by-step code:

1. Wait for `fetch()` to receive the response.
2. Wait for the response body to convert to JSON.
3. Display the joke.

><b>Note:</b> <br>
>JavaScript only allows `await` inside an `async` function. It tells JavaScript that the function performs asynchronous work and will return a Promise. Without `async` before function on line 8, JavaScript would report an error such.
>``` 
>await is only valid in async function
>```
<br>

The code after line 22 is the older Promise `.then()`

```js
fetch(url, config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerHTML = data.joke;
    });
```

It performs the same actions, but each `.then()` runs after the previous Promise completes.

### The reason why `async/await` was used instead of `.then()`

The alternative `.then()` example is not outdated. It is still fully supported and common in JavaScript.

However, `async`/`await` is generally preferred for this code because it is easier to read, especially when several asynchronous steps happen in sequence.

Use `.then()` when:

- You are working in existing Promise-based code.
- You prefer chaining operations.
- You need a compact one-off operation.

Use `async`/`await` when:

- The function has multiple asynchronous steps.
- You want code that reads top-to-bottom.
- You need straightforward `try...catch` error handling.

Both versions behave the same here. Your current `async`/`await` version is the clearer choice.