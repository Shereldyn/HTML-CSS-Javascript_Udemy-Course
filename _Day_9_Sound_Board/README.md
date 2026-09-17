# Day 9 Sound Board

## **Description of project**

-   We're going to work with the HTML 5 audio tag and we're going to create this soundboard, so we have these different effects.
-   Basically when we click on a button it makes a sound effect.
-   If the sound is still playing and we click a another one, it's going to stop that effect and start the next one, we can do this using audio tags.
-   In HTML 5: you have the audio tag, you can show controls(we're not going to do that), we're going to do everything through JavaScript.
-   If you capture an audio element with Get element by ID, etc. you'll have some methods and properties on that object that you bring in, such as: play, pause, etc.
-   You can take a look at MDN Docs to see explanations about audio tags and the different methods.


## **Coding Notes**
## *<b>HTML</b>*

Line 15 creates an HTML audio element:

```html
<audio id="applause" src="sounds/applause.mp3"></audio>
```

- `id="applause"` gives it a name JavaScript can find.
- `src="sounds/applause.mp3"` points to the sound file.
- JavaScript can then play it when the applause button is clicked.


## *<b>CSS</b>*

`flex-direction` was not needed because its default value is:

```css
flex-direction: row;
```

The `body` uses:

```css
display: flex;
flex-wrap: wrap;
```

The buttons are therefore arranged horizontally from left to right and wrap onto new lines when necessary.

The commented code:

```css
/* flex-direction: column; */
```

would arrange the body’s direct children vertically. However, the buttons are all inside the `#buttons` div, so to control the button layout directly, you would usually apply flex styles to `#buttons`:

```css
#buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
```

Then use:

```css
#buttons {
    flex-direction: column;
}
```

only if you want the buttons stacked vertically.


## *<b>Javascript</b>*

### <b>Breakdown of code:</b>
### 1. Store sound names

```js
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
```

This array contains the names of the sounds. Each name matches an audio element’s `id` in `index.html`.

### 2. Loop through the sounds

```js
sounds.forEach(sound => {
```

Runs the code once for every sound. For example, during one loop:

```js
sound === 'applause'
```

### 3. Create a button

```js
const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = sound;
```

This:

- Creates a new `<button>`
- Adds the CSS class `btn`
- Displays the sound name on the button

### 4. Add click behavior

```js
btn.addEventListener('click', () => {
```

This waits for the user to click the button.

Inside the click function:

```js
if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
}
```

This is intended to pause and reset the previously playing sound.

Then:

```js
currentSound = document.getElementById(sound);
currentSound.play();
```

This finds the matching audio element and plays it.

For example, when `sound` is `"applause"`:

```js
document.getElementById('applause').play();
```

### 5. Add the button to the page

```js
document.getElementById('buttons').appendChild(btn);
```

Finds the `<div id="buttons">` element and inserts the newly created button inside it.

### Overall flow

```text
Create sound names
        ↓
Loop through each name
        ↓
Create a button
        ↓
Add click behavior
        ↓
Pause the previous sound
        ↓
Find and play the selected sound
        ↓
Add the button to the page
```

### <b>Difference between `.play()` and `.onplay()`</b>

`.play()` starts the audio immediately.

```js
currentSound.play();
```

`.onplay` is an event handler. It runs code **when the audio starts playing**, rather than starting the audio itself.

```js
currentSound.onplay = () => {
    console.log('The sound started playing');
};
```

The distinction is:

- `.play()` = command the audio to play
- `.onplay` = respond after playback begins

For this sound board, `.play()` is needed because clicking the button should start the sound.