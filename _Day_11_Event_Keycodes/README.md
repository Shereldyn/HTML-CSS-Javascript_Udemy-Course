# Day 11 Event Keycodes

## **Description of project**

- We're going to build an application that shows you the keyCode and the code for any key on your keyboard.
- The `.keyCode` property was useful when you wanted to handle keys based on their physical positions on an input device rather than the characters associated with those keys common in games and stuff like that.
- `.keyCode` is deprecated(no longer recommended), it is instead recommended to use `.code` or `.key`.

## **Coding Notes**

> ### Notes:
>`.keyCode` is a property on a keyboard event that returns a numeric code for the pressed key.
>
>```js
>document.addEventListener("keydown", (event) => {
>  console.log(event.keyCode); // 13 for Enter
>});
>```
>
>However, `.keyCode` is deprecated. Use these instead:
>
>```js
>event.key   // "Enter", "a", "ArrowUp"
>event.code  // "Enter", "KeyA", "ArrowUp"
>```
>
>Use `event.key` when you care about the character or key value, and `event.code` when you care about the physical keyboard key.

## *<b>CSS</b>*

Lines 44 and 45 are still needed:

```css
left: 0;
text-align: center;
```

They apply to the `<small>` labels, not the whole page:

- `left: 0` positions the absolutely positioned label at the left edge of its `.key` container.
- `text-align: center` centers the label’s text within its full width.

The `text-align: center` on the `body` centers normal text generally, but it does not replace the positioning and width rules needed for `.key small`.

## *<b>JAVASCRIPT</b>*

This code displays information about whichever keyboard key you press.

```js
const insert = document.getElementById('insert');
```

Finds the HTML element with `id="insert"`.

```js
window.addEventListener('keydown', (event) => {
```

Waits for a key to be pressed anywhere on the page. The pressed-key information is stored in `event`.

```js
insert.innerHTML = `
```

Replaces the contents of `#insert` with new HTML.

```js
${event.key === ' ' ? 'Space' : event.key}
```

Displays the key’s value:

- If the key is Space, display `"Space"`.
- Otherwise, display the key itself, such as `"a"` or `"Enter"`.

```js
${event.keyCode}
```

Displays the numeric key code. This property is deprecated but still works in many browsers.

```js
${event.code}
```

Displays the physical key name, such as `"KeyA"` or `"Enter"`.

The overall flow is:

1. You press a key.
2. The `keydown` event runs.
3. JavaScript reads the key information.
4. The old HTML is replaced with three boxes showing `event.key`, `event.keyCode`, and `event.code`.
5. The CSS styles those boxes.