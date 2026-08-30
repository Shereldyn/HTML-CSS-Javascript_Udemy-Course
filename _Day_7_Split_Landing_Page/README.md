# Day 7 Split Landing Page

## **Description of project**

- We're going to be creating a split landing page.
- And we're going to actually format it to be PlayStation five and Xbox Series X.
- It's going to like you have a store where you can come and you can choose one of these.
- We're going to create this split screen with a background image, with an overlay, with some content inside.
- And if we click on one side, it's going to stretch out to about 75%, the other side, 25%.
- If I hover on the right side, it's going to do the same thing.
- We'll add a little hover effect onto the buttons.
- So I think it's just a nice looking little landing page.
- It's going to be very CSS heavy.
- We'll do a little bit of JavaScript at the end for the hover effects.

<br>

## **Coding Notes**

## *<b>HTML</b>*

## Why the container was used

The container was used because the page needs a single parent element to hold both halves of the split layout and to act as the positioning reference.

### The key idea

This line is the important one:

```css
.container {
    position: relative;
}
```

When an element is `position: relative`, it becomes the reference point for any child elements that are positioned with `position: absolute`.

Then this happens:

```css
.split {
    position: absolute;
    width: 50%;
    height: 100%;
}
```

and then:

```css
.split.left {
    left: 0;
}

.split.right {
    right: 0;
}
```

This means:

- each half is removed from normal document flow
- the two halves are placed inside the container
- the container decides where the whole layout sits on the page

### Why not just use the body?

If you positioned the left and right panels directly against the page, you would still be able to do it, but it would be less organized and less flexible. The container creates a cleaner structure:

- one parent
- two children
- controlled layout

### Simple real-world analogy

Think of the container as a poster frame:

- the frame is the boundary
- the left and right panels are the artwork inside it
- the frame keeps everything aligned and contained

Without the frame, the pieces could drift or overlap unpredictably.

### In one sentence

The container was used to create a stable layout area so the left and right split sections could be positioned precisely and neatly side by side.

## Why `position: absolute` was used on `.split`

The `.split` panels are given `position: absolute` so they can be placed exactly where the designer wants, instead of flowing naturally in the page.

### The important rules

```css
.split {
    position: absolute;
    width: 50%;
    height: 100%;
}
```

This does a few things:

- removes each panel from the normal document flow
- lets it sit on top of the page layout in a fixed, controlled position
- makes it possible to place the left panel on the left side and the right panel on the right side

Then this is added:

```css
.split.left {
    left: 0;
}

.split.right {
    right: 0;
}
```

That tells each panel exactly where to go:

- left panel starts at the left edge
- right panel starts at the right edge

### Why absolute positioning is useful here

A split landing page needs two full-height sections side by side. If they were normal block elements, they would stack vertically by default. But here the designer wants them side by side, each taking half the screen.

`position: absolute` makes it easy to do that because the elements are no longer constrained by normal stacking rules.

### Why the container matters with absolute positioning

Because the container is `position: relative`, the absolutely positioned `.split` panels are positioned relative to that container, not the whole browser window.

So the structure becomes:

- container = the screen area
- split panels = placed inside that area
- left and right = each half of that area

### In summary

`position: absolute` was used because the page needs two panels laid out side by side across the full height of the screen, with exact placement control.

That is the main reason: it gives precision and control over the split layout.



## *<b>CSS</b>*

## Difference between exact positioning and flexbox layout

### 1) Exact positioning
This is when you place elements by specifying coordinates manually, usually with `position: absolute` or fixed offsets like `left`, `top`, `right`, `bottom`.

Example:

```css
h1 {
    position: absolute;
    left: 50%;
    top: 20%;
}
```

This means:

- the element is placed at a specific spot
- the developer controls its exact location
- the element does not automatically flow with the rest of the page

This is useful for:
- overlays
- custom hero sections
- split-screen designs
- elements that need exact placement

---

### 2) Flexbox layout
Flexbox is a layout system designed to arrange items in a row or column automatically.

Example:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

This means:

- items are arranged based on the container
- the browser handles spacing and alignment automatically
- elements adapt to available space

This is useful for:
- nav bars
- cards
- centering content
- responsive row/column layouts

---

## Main difference

### Exact positioning
- gives you control over pixel-by-pixel placement
- good for special designs
- more manual
- can be harder to maintain

### Flexbox
- gives you dynamic layout flow
- good for grouping items
- easier to make responsive
- less manual

---

## In this page
The split-screen page uses exact positioning because each side must occupy a precise half of the screen and each text/button should be placed inside its panel at a certain location.

This is why you see:
- `position: absolute`
- `left: 0`, `right: 0`
- `left: 50%`, `top: 20%`

Those are all examples of exact positioning.


## Why `content: '';` is used

`content: '';` is required when you use a pseudo-element like `::before` or `::after`.

Without it, the pseudo-element would not actually generate any content to render.

### In this case
The pseudo-element is being used only as a visual layer:

```css
.split.left::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--left-bg-color);
}
```

So the browser creates an empty box, and then CSS styles it with:

- full width
- full height
- colored background

This makes it act as a tint/overlay.

### Why empty string?
Because you do not want actual text inside it. You only want a visual box.

So:

```css
content: '';
```

means:
- “create the pseudo-element”
- “but don’t put any text in it”

### If you removed it
The pseudo-element would not appear at all, because CSS pseudo-elements need content to exist.

### In short
`content: '';` is there because `::before` needs a generated element, even if it is empty and only used for styling.

## What `transform: translateX(-50%)` does

This line:

```css
transform: translateX(-50%);
```

moves the element left by half of its own width.

### Why it is used
The heading is positioned like this:

```css
h1 {
    position: absolute;
    left: 50%;
    top: 20%;
}
```

This places the left edge of the heading at the center of the parent.

But the heading is not actually centered yet, because its own width still extends to the right. So it appears shifted to the right.

### What `translateX(-50%)` fixes
It subtracts half of the element’s own width:

- element starts at 50% of parent
- then it moves left by half its own width
- result: it ends up perfectly centered

### Example
If the heading is 300px wide:

- `left: 50%` places it at the center
- `translateX(-50%)` moves it back by 150px
- now the center of the heading lines up with the center of the parent

### Why this is common
It is a very common trick for centering absolutely positioned elements without needing to know the exact width.

### In short
This line is what makes the heading visually centered horizontally.

Read , lines 120 to 153

## From the later section of [style.css](.`style.css`)

This block is the “right panel + hover interaction” part.

### 1) `.split.right`
```css
.split.right {
    right: 0;
    background: url('xbox.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
```

This means:

- the right panel sits flush against the right edge of the container
- it loads the Xbox background image
- the image fills the panel without repeating

### 2) `.split.right::before`
```css
.split.right::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--right-bg-color);
}
```

This creates a dark overlay on top of the Xbox background so the image is still visible but tinted.

---

## Hover effect section

These rules are what make the split screen respond when the mouse hovers:

```css
.hover-left .left {
    width: var(--hover-width);
}

.hover-left .right {
    width: var(--other-width);
}

.hover-right .right {
    width: var(--hover-width);
}

.hover-right .left {
    width: var(--other-width);
}
```

### What this means
If the container has a class like:

- `.hover-left`
- `.hover-right`

then the widths of the two panels change.

Example:
- `.hover-left .left` makes the left panel wider
- `.hover-left .right` makes the right panel narrower

This creates the effect where one side expands and the other side shrinks when hovered.

### Why it is useful
It gives the split-screen layout an interactive feel:
- one side becomes the “focus”
- the other side becomes smaller
- the user sees a stronger visual contrast

So this section is not just styling — it is the behavior layer for the split landing page.

Read , lines 132 to 150

## What this block is doing

This section in style.css:

```css
.split.right,
.split.left,
.split.right::before,
.split.left::before {
    transition: all var(--speed) ease-in-out;
}
```

applies a smooth animation to all four of these elements:

- `.split.left`
- `.split.right`
- `.split.left::before`
- `.split.right::before`

### Why this is useful
When the hover classes change panel sizes, the browser animates the change instead of snapping instantly.

For example:

```css
.hover-left .left {
    width: var(--hover-width);
}
```

and

```css
.hover-left .right {
    width: var(--other-width);
}
```

cause the panels to resize. Because of the transition rule, the width change happens smoothly.

### Meaning of each part
- `transition` = enables animation
- `all` = animate all properties that change
- `var(--speed)` = use the CSS variable for animation speed
- `ease-in-out` = smooth acceleration and deceleration

### Why include the pseudo-elements too?
Because the overlays created by `::before` also change visually when the panel changes. If you only transitioned the panels and not the overlays, the color tint could appear abruptly.

### In simple terms
This block makes the split-screen effect feel smooth and polished when the user hovers over one side.



## `@media (max-width: 800px)`
This is a responsive rule:

```css
@media(max-width: 800px) {
    h1 {
        font-size: 2rem;
    }

    .btn {
        padding: 1.2rem;
        width: 12rem;
    }
}
```

This means:

- when the screen is 800px or smaller
- the headings shrink from 4rem to 2rem
- the buttons become slightly smaller

This makes the layout more mobile-friendly.

So the final section is really:
- small-screen responsiveness

## *<b>Javascript</b>*

## What lines 6 and 7 do

These lines are:

```js
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
```

### First line
```js
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
```

This means:

- when the mouse enters the left panel
- add the CSS class `hover-left` to the container

Once that class is added, the CSS rules like this become active:

```css
.hover-left .left {
    width: var(--hover-width);
}

.hover-left .right {
    width: var(--other-width);
}
```

So the left side expands and the right side shrinks.

---

### Second line
```js
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
```

This means:

- when the mouse leaves the left panel
- remove the `hover-left` class from the container

So the layout goes back to normal.

---

## Why this is needed
The hover effect is triggered by JavaScript because CSS alone cannot detect “mouse entered this panel” in a way that changes layout for the whole container. So JavaScript adds and removes the class based on mouse movement.

This is the core interaction behind the split-screen hover animation.

If you want, I can also explain the matching `right` event listeners and how they work together.