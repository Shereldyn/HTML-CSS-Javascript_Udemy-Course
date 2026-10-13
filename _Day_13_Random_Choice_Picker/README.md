# Day 13 Random Choice Picker

## **Description of project**

- This is a project for picking random choices.
- When you start typing in the textbox, your text will be formatted like a tag below the textbox.
- If you want to create another choice, you separate your previous text with a comma(,) and type again, for as many as you want.
- And when you click enter, there will be an effect where the tags will be randomly highlighted until a choice is picked and that choice will be highlighted.
- The text area will be emptied after your choice is picked.

## **Coding Notes**

## *<b>HTML</b>*


## *<b>CSS</b>*

## *<b>JavaScript</b>*

`filter()`: is a high order array method that allows you to return certain things based on a conditional


`setInterval` ???

```JavaScript
    setTimeout(() => {
        e.target.value = '';
    }, 10)  //waits 10 milliseconds then clears textarea
```

```JavaScript
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
```

----

### <u>Description of how the code works:</u>

- Gets references to the two main elements on the page:
  - `tagContainer`: the container where the tags are displayed
  - `textArea`: the input area where the user types choices

- Calls `textArea.focus()`
  - This puts the cursor inside the text box as soon as the page loads, so the user can start typing immediately.

- Adds a `keyup` event listener to the textarea:
  - Every time the user releases a key, this runs.
  - It calls `createTags(e.target.value)`, which turns the current text into visible tags.
  - Then it checks if the pressed key was Enter.
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
  - For each tag:
    - creates a new `<span>` element
    - adds the class `"tag"`
    - sets its text to the tag value
    - appends it to the container so it appears on the page

- `randomSelect()`
  - Sets times = 30
  - This means the animation will run for 30 rounds.
  - Creates an interval:
    - setInterval(() => {...}, 100)
  - Every 100 milliseconds:
    - picks a random tag
    - highlights it
    - after another 100 milliseconds, removes the highlight
  - This makes the selection look like it is rapidly moving between different options.
  - After a total of 30 rounds:
    - clearInterval(interval) stops the flashing animation
    - then it picks one final random tag and highlights it

- pickRandomTag()
  - Finds all elements with class .tag:
    - document.querySelectorAll('.tag')
  - Chooses a random one:
    - Math.random() gives a number between 0 and 1
    - multiplied by tags.length gives a random index
    - Math.floor() turns it into an integer index
  - Returns the selected tag element

- highlightTag(tag)
  - Adds the CSS class "highlight" to a tag
  - This makes the chosen tag visually stand out

- unHighlightTag(tag)
  - Removes the "highlight" class from a tag
  - This makes the highlight disappear after a brief moment

In short, the program:
1. turns comma-separated text into visible tags
2. repeatedly flashes random tags
3. stops after a set number of loops
4. selects one final tag and highlights it

This is a classic “random picker” pattern used in many interactive apps.