# Day 5 Blurry Loading

## Description of project

- In this project we're going to build a scroll animation, which is pretty simple and useful.
- You may have come across different sites where as scroll the page move/travel into view from, seemingly, off the page.
- The lecturer mentioned that in his project he created content blocks and at first you can see there's three blocks.
- However when he starts to scroll down, the another block comes in from the left, he goes down some more, and another comes in from the right and the rest of the blocks alternate the directions they come from.
- We're going to use CSS transitions to have it come in smoothly.
- We're going to use JavaScript to basically tell where the trigger point is for the next box to come in.
- And then we're going to add a specific class to show the next box when it hits the trigger point in the page.
- And then if we go back up, it'll remove the class when it hits the trigger point making the box to slide back out.
- This is very useful as we can use this in a lot of different UI's and different websites.

## Coding Notes
### CSS
In this scroll-animation project, keeping `height: 100vh` and `overflow: hidden` active would be harmful:

- `height: 100vh` limits the body to the viewport height.
- `overflow: hidden` prevents scrolling.
- The animation depends on scrolling to reveal the boxes.

So they are leftover starter-code lines that should remain removed or commented out.

You’re right, I may have been off by one because the editor’s line numbers include blank lines. I’ll verify the exact numbered stylesheet and then explain that specific declaration.

Line 34:
```css
box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
```

This adds a shadow beneath each `.box`:

- `2px`: horizontal offset, moving the shadow 2 pixels right
- `4px`: vertical offset, moving it 4 pixels down
- `5px`: blur amount, making the shadow softer
- `rgba(0, 0, 0, 0.3)`: black with 30% opacity

The result is a subtle shadow that makes the boxes look raised from the page.

<br>

----

In this project, these two lines control the box animation:

```css
transform: translateX(400%);
transition: transform 0.4s ease;
```

### `transform`

```css
transform: translateX(400%);
```

Is intended to move each `.box` horizontally along the X-axis:


- `transform` applies a visual transformation.
- `translateX(...)` moves the element left or right.
- Positive values move it right; negative values move it left.

This moves each `.box` horizontally to the right by **400% of its own width**, placing it outside the visible page.

>For a box that is `400px` wide:
>
>- `100%` = 400px right
>- `400%` = 1,600px right

<br>
When the `.show` class is added:

```css
.box.show {
    transform: translateX(0);
}
```

the box returns to its normal position.

`transform` changes the box’s visual position without changing the normal document layout. It does not create animation by itself; it simply changes the position immediately.

### `transition`

```css
transition: transform 0.4s ease;
```

This is shorthand for:

```css
transition-property: transform;
transition-duration: 0.4s;
transition-timing-function: ease;
transition-delay: 0s;
```

It tells the browser to animate changes to `transform` over 0.4 seconds.

The intended sequence is:

1. The box starts at `translateX(400%)`.
2. JavaScript adds the `show` class.
3. The transform changes to `translateX(0)`.
4. The transition makes that change appear as a smooth slide.

### `ease` and other timing functions

The timing function controls **how the animation’s speed changes over time**. It does not control the duration.

```css
transition: transform 0.4s ease;
```

Common options include:

>`ease`
>
>Starts moderately slowly, speeds up, then slows down near the end. This is the usual natural-looking choice.

>`linear`
>
>Moves at the same speed from start to finish.

>`ease-in`
>
>Starts slowly and becomes faster toward the end.

>`ease-out`
>
>Starts quickly and slows down near the end. This often feels good for a box sliding into place.

>`ease-in-out`
>
>Starts slowly, speeds up in the middle, and slows down again at the end.

You can also define your own timing curve:

```css
transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
```

So, in short: `transform` defines the box’s position, while `transition` controls how smoothly the box moves between positions.

### Javascript


The `Element.getBoundingClientRect()` method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.


A `DOMRect` describes the size and position of a rectangle.

Line 15 is:

```js
const boxTop = box.getBoundingClientRect().top;
```

It does three things:

1. `box.getBoundingClientRect()`

    Returns a `DOMRect` object providing information about the size of an element and its position relative to the viewport.
    ```js
    domRect = element.getBoundingClientRect();
    ```
    
    It returns an object containing values such as:

    ```js
    {
        top: 250,
        bottom: 450,
        left: 100,
        right: 500,
        width: 400,
        height: 200
    }
    ```

2. `.top`

    Selects only the `top` value: the distance between the top of the box and the top of the visible browser window.

    - Positive value: the box is below the top of the viewport.
    - `0`: the box’s top edge is exactly at the top of the viewport.
    - Negative value: the box has moved above the viewport.

3. `const boxTop =`

    Stores that distance in a constant named `boxTop`, so it can be compared with the animation trigger point:

    ```js
    const triggerBottom = window.innerHeight / 5 * 4;
    ```

This is where the next logic comes in:

```js
if (boxTop < triggerBottom) {
    box.classList.add('show');
} else {
    box.classList.remove('show');
}
```

This means: **when the top of a box reaches the trigger point, add the `show` class**. The CSS then changes the box from:

```css
transform: translateX(400%);
```

to:

```css
transform: translateX(0);
```
Thus resulting in the boxes moving into and out of view when the box reaches the trigger point.