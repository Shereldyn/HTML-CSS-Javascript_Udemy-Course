# Day 5 Blurry Loading

## Description of project

-  In this project we're going to be building a blurry loading page or loading image.
-  When you go onto the page, you'll see that the image starts blurred and we also start with 0%, and then it goes up to 100% and the image comes into focus. So you could use this to load just about anything.
- We're just doing a blur effect on the image.
- But you could load in your site, you could have any other elements in the DOM load in that specific amount of time from when we go to 0 to 100
- And we'll have to map different number ranges to the 0 to 100 load, for instance, the image blur is going to go from 30 pixels down to 0 pixels, as we go from 0 to 100.
- And there's a stackoverflow function that we're going to use to help us do that, to help us map one number range to another.

## Coding Notes
### CSS
Lines 25–26 are:

```css
width: calc(100vw + 60px);
height: calc(100vh + 60px);
```

- `100vw` means 100% of the browser window’s width.
- `100vh` means 100% of the browser window’s height.
- `calc(...)` performs a calculation.
- Adding `60px` makes the background 30px larger on each side because it is positioned at `top: -30px` and `left: -30px`.

This extra space prevents the blur effect from revealing blank edges around the image.

### Javascript
The `$` is part of JavaScript’s **template literal interpolation** syntax.

In this code:

```js
`blur(${scale(load, 0, 100, 30, 0)}px)`
```

`${...}` means: **evaluate the JavaScript expression inside the braces and insert its result into the string**.

For example, if `scale(...)` returns `15`, the result becomes:

```js
"blur(15px)"
```

The backticks `` ` `` are required for template literals. `$` by itself is not special here; the complete syntax is `${...}`.

