# Day 13 Random Choice Picker

## **Description of project**

- This is a project for picking random choices.
- When you start typing in the textbox, your text will be formatted like a `tag` below the textbox.
- If you want to create another choice, you separate your previous text with a comma(,) and type again, for as many as you want.
- And when you click enter, there will be an effect where the `tags` will be randomly highlighted until a choice is picked and that choice will be highlighted.
- The text area will be emptied after your choice is picked.

## **Coding Notes**

## *<b>JavaScript</b>*

>`() => {}` is an arrow function expression, it is an anonymous function (a function without its own name) that is typically assigned to a variable or passed directly as a callback. 
>
>For example:
>```JavaScript
>const sayHello = () => {
>    console.log("Hello!");
>};
>
>sayHello(); // The variable name 'sayHello' points to an anonymous arrow function
>```
>or
>```JavaScript
>setTimeout(() => {
>  console.log("Running later!");
>}, 1000); // Used directly without any function name
>```
>*An anonymous function can also be written as `function() {}`.*


`filter()`: is a high order array method that allows you to return certain things based on a conditional

### JavaScript Timers
JavaScript timers let you run a function after a delay or repeatedly at fixed intervals.<br>
The two main timer functions are `setTimeout()` and `setInterval()`.
- `setTimeout()`: schedules a function to run once after a delay.
    ```JavaScript
    setTimeout(functionName, milliseconds); //NOT functionName(), this calls function immediately instead of delaying the function
    //or
    setTimeout(() => {}, milliseconds);
    //The first argument is the function to run.
    //The second argument is the delay in milliseconds, one second is 1000 milliseconds.
    ```
    - `setTimeout()` does not stop JavaScript from running other code.
    - A delay of zero milliseconds does not mean that the callback function will run immediately. It means that the callback will run as soon as the current JavaScript task has finished.
    - **Delays are Minimums, Not Guarantees:** A delay of `1000`ms means the callback will wait *at least* `1000` ms. If the main thread is busy running heavy synchronous code or long loops when the timer expires, the callback must wait until the main thread frees up.
    - The `setTimeout()` function returns a timer identifier which can be passed to `clearTimeout()` to cancel the timer.
    - You can create a repeating timer by calling `setTimeout()` again after each task finishes.
      ```JavaScript
      function repeat() {
        myDisplayer("Hello");
        setTimeout(repeat, 1000);
      }

      repeat();
      ```
      With **repeated `SetTimeout()`**, the next delay begins after the current callback has finished. *Repeated `setTimeout()` is useful when one task must finish before the next delay begins.*
      >With **`setInterval()`**, the interval continues to schedule call backs at regular intervals.

>   ### Note
>   - Timers do not interrupt running JavaScript.<br>
>   A long-running function can delay timer callbacks and make the page unresponsive.
>   - Timer functions can accept strings, but strings should not be used as JavaScript Code.<br>
>   **Not Recommended**: `setTimeout("myFunction()", 1000);`<br>
>   **Recommended**: `setTimeout(myFunction, 1000);`
>   Passing a function is safer, clearer, and easier to debug.

- `clearTimeout()`: cancels a timeout by receiving the timer identifier from `setTimeout()`.
  ```JavaScript
  clearTimeout(timerID);
  ```
- `setInterval()`: runs a callback function repeatedly.
  ```JavaScript
  setInterval(function, milliseconds);
  ```
  - The callback function is called repeatedly with (at least) the specified delay in between. For example:
    ```Javascript
    setInterval(showTime, 1000)

    function showTime() {
      const date = new Date();
      myDisplayer(date.toLocaleTimeString());
    }
    ```
  - The `setInterval()` function returns an interval identifier which can be passed to `clearInterval()` to cancel the interval.
- `clearInterval()`: stops an interval/repeating function by receiving the interval identifier from `setInterval()`.
  ```JavaScript
  clearInterval(intervalID);
  ```

>### Passing Arguments
>Arguments passed to `setTimeout()` or `setInterval()` are passed to the callback function. For example:
>```Javascript
>setTimeout(showMessage, 2000, "Hello", "John");
>
>function showMessage(greeting, name) {
>  document.getElementById("demo").innerHTML = greeting + " " + name;
>}


#### Timers Run on the Main Thread

JavaScript timers execute code asynchronously on a single main thread without pausing the application. Setting a timer acts as a minimum delay rather than a strict guarantee, meaning scheduled tasks must wait in line if the main thread is busy with other work.

#### Common Timer Mistakes

- **Calling the Function Immediately**
  `setTimeout(myFunction(), 1000);`
  Remove the parentheses when passing the function:
  `setTimeout(myFunction, 1000);`
- **Forgetting the Timer Identifier**
  Saved the returned identifier if the timer must be canceled later.
  ```JavaScript
  const timer = setTimeout(myFunction, 1000);
  clearTimeout(timer);
  ```
- **Starting Multiple Intervals**
  Starting an interval more than once creates multiple repeating timers.
  ```JavaScript
  if (!timer) {
    timer = setInterval(myFunction, 1000);
  }
  ```
- **Expecting Exact Timing**
  Timer delays are not exact schedules.
  Callback run only when JavaScript is ready.
- **Forgetting to Stop an Interval**
  And interval continues until it is stopped or the page is closed.
  `clearInterval(timer);`





```JavaScript
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
```

`tags[Math.floor(Math.random() * tags.length)];`


----

### <u>Description of how the code works:</u>

- Gets references to the two main elements on the page:
  - `tagContainer`: the container where the `tags` are displayed
  - `textArea`: the input area where the user types choices

- Calls `textArea.focus()`
  - This puts the cursor inside the text box as soon as the page loads, so the user can start typing immediately.

- Adds a `keyup` event listener to the textarea:
  - Every time the user presses a key and releases it the event runs.
  - It calls `createTags(e.target.value)`, which turns the current text into visible `tags`.
    - `e.target` is the element that triggered the event, which is the textarea.
    - `e.target.value` is the text currently inside the textarea.
    - So this passes the user’s typed text into `createTags()`, which converts it into a list of visible choice tags.
  - Then it checks if the pressed key was Enter: `if (e.key === 'Enter') { ... }`
    - If Enter was pressed:
        - it waits 10 milliseconds, then clears the textarea
        - it calls `randomSelect()`, which starts the random selection animation

- `createTags(input)`
  - Takes the full text from the textarea as one string.
    - Splits it by commas:
      - `input.split(',')`
    - Removes empty entries and trims whitespace around each item:
      - `.filter(tag => tag.trim() !== '')`
      - `.map(tag => tag.trim())`
    - This means text like:
      - "apple, banana,   mango, , pear" <br>
        becomes:
      - ["apple", "banana", "mango", "pear"]
  - Then it clears the `tagContainer`:
    - `tagContainer.innerHTML = ''`
  - For each `tag`:
    - creates a new `<span>` element
    - adds the class "`tag`"
    - sets its text to the `tag` value
    - appends it to the container so it appears on the page

- `randomSelect()`
  - Sets `times = 30`
    - This means the animation will run for 30 rounds.
  - Creates an interval:
    - `setInterval(() => {...}, 100)`
        - Every 100 milliseconds:
          - picks a random `tag`
          - highlights it
          - after another 100 milliseconds, removes the `highlight`
        - This makes the selection look like it is rapidly moving between different options.
  - delays by 30 rounds: 
    - `setTimeout(() => {...}, times * 100);`: This is a delayed action scheduled to run after a certain duration. It uses `times * 100` as the delay, which means 30 × 100 = 3000 milliseconds, or 3 seconds.
        - `clearInterval(interval)` stops the flashing animation
        - then it picks one final random `tag` and highlights it

- `pickRandomTag()`
  - Finds all elements with class `.tag`:
    - `document.querySelectorAll('.tag')`
  - Chooses a random one:
    - `Math.random()` gives a number between 0 and 1
    - multiplied by `tags.length` gives a random index
    - `Math.floor()` turns it into an integer index
  - Returns the selected `tag` element

- `highlightTag(tag)`
  - Adds the CSS class "`highlight`" to a `tag`
  - This makes the chosen `tag` visually stand out

- `unHighlightTag(tag)`
  - Removes the "`highlight`" class from a `tag`
  - This makes the `highlight` disappear after a brief moment

In short, the program:
1. turns comma-separated text into visible `tags`
2. repeatedly flashes random `tags`
3. stops after a set number of loops
4. selects one final `tag` and `highlights` it

This is a classic “random picker” pattern used in many interactive apps.