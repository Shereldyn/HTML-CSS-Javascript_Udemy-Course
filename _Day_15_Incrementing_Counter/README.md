# Day 15 Incrementing Counter
## **Description of project**

- This project is an increment counter, some websites have these.
- Basically, we'll have these icons and numbers, in this case, representing twitter/X, YouTube, Facebook but this could be any number.
- When we go onto the site initially, you'll see the labels for the numbers, count from zero up.
- In the code for this project, we'll be able to set the increment which will determine how fast we reach the set value.
- We're going to create the page, style it, and then make it responsive so that when it's on a smaller screen the items align vertically.
- And then we'll add the JavaScript to make it increment.

## **Coding Notes**

## *<b>HTML</b>*

```HTML
    <div class="counter" data-count-to="12000">12000</div>
    <!--//data-target is no longer preferred -->
```
`data-count-to`: is a custom data attribute which used in this case to store the final value of the count. The attribute doesn't necessarily need to be `count-to`, it could instead be customised to `data-target-value`, or `data-value`.

>### Note:
>Originally the code was `data-target="12000"` but this is no longer the preferred industry standard for modern web development because:
>- The `data-target` attribute is a custom HTML data attribute used to point from one element to another target element on the page(usually via a CSS selector like an ID or a class). 
>- And older frameworks(like Bootstrap) look for `data-target` attributes globally to trigger their own actions.
>
>Therefore using this attribute would've caused framework conflicts and made it difficult to read or maintain the code later on.
>
>**The preferred standard:**<br>
>Modern web standards heavily prefer using **ARIA attributes** for better accessibility. For example: instead of `data-target="#menu"`, using **`aria-controls="menu"`** allows screen readers to understand the relationship between the controller button and the target container.

## *<b>CSS</b>*

### <u>*<b>Media Queries</b>*</u>

```CSS
@media(max-width: 580px) {
    body {
        flex-direction: column;
    }
}
```

CSS media queries allow you to apply styles based on the characteristics of a device or the environment displaying the web page.

CSS media queries are essential for creating responsive web pages.

### <u>*Media Query Syntax*</u>

A media query consists of an optional media-type and one or more media-features, which resolve to either true or false.

```CSS
@media [not] media-type and (media-feature:value) and (media-feature: value) {
    /*CSS rules to apply*/
}
```
The media-type is optional. However, if you use **`not`**, you must also specify a media-type.

The result of a media query is true if the specified media-type matches the type of device, and all the media-features are true. When a media query is true, the corresponding style rules are applied following the normal cascading rules.

Meaning of the **`not`** and **`and`** keywords:
- **`not`**: This optional keyword inverts the meaning of the entire media query.
- **`and`**: This keyword combines a media-type and one or more media-features.

### *CSS Media Types*

The optional media type specifies the type of media the styles are for. If media type is omitted, it will be set to "all".

|Value|Description|
|:--|:--|
|all|Used for all media type devices|
|print|Used for print preview mode|
|screen|Used for computer screens, tablets, and smart-phones|

### *CSS Media Features*

The media feature specifies a specific characteristic of the device.

Here are some commonly used media features:

|Value|Description|
|:--|:--|
|max-height|Maximum height of the viewport|
|min-height|Minimum height of the viewport|
|height|Height of the viewport (including scrollbar)|
|max-width|Maximum width of the viewport|
|min-width|Minimum width of the viewport|
|width|Width of the viewport (including scrollbar)
|orientation|Orientation of the viewport (landscape or portrait)|
|resolution|Screen resolution|
|prefer-color-scheme|User's preferred color scheme(light or dark)|

### *Media Queries Examples*

Here we use a media query to change the background-color of the body to lightgreen, if the width of the viewport is 480px, or wider:

```CSS
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

Here, we use a media query to change the background-color of the body to lightgreen, if the width of the viewport is between 480px and 768px:
```CSS
@media screen and (min-width: 480px) and (max-width: 768px) {
    body {
        background-color: lightgreen;
    }
}
```

## *<b>JavaScript</b>*

```JavaScript
    const targetAmnt = +counter.getAttribute('data-count-to');
    const c = +counter.innerText;
```
- `counter.getAttribute('data-count-to')`: calls the data attribute value for the current `counter` element in the `forEach` loop.
- `counter.innerText;`: calls the current display value.
- `+`: is a **Unari Plus Operator(+)** which attempts to converts the called values from a string into numbers so that we can use maths with these values later.

>**Note:**<br>
>There are 2 other options to convert the `targetAmnt` into a number, namely:
>- `... = Number(counter.getAttr...)`- wrapping the value in a `Number()` constructor.
>- `parseInt()`


**Adding the increments to the display value:**
```JavaScript
    counter.innerText = `${Math.ceil(c + increment)}`;
```
- `backtick${}backtick`- creates a template string which turns the result into text for display
- `Math.ceil()`- rounds result up to the next whole number
- `c + increment`- adds the increment to the current count/display value.