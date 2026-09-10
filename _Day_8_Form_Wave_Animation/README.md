# Day 8 Form Wave Animation

## **Description of project**

-   We're going to build a simple login form with a wave effect on the labels.
-   For example if I click in the input, the label will then have a wave animation.
-   We're going to basically wrap a span around each letter of the inputs using JavaScript.
-   Then we're going to add a transition so the letters moves up when we focus on the input.
-   And we're also going to add a dynamic transition delay so that it gives that wave effect, where each letter goes up at a different time.

## **Coding Notes**

## *<b>HTML</b>*

## What the form tag does

The `<form>` tag creates an HTML form, which is a section of a page where users enter information and submit it.

It is used for things like:

- login screens
- signup forms
- contact pages
- search boxes
- checkout forms

### In plain terms:
It tells the browser:

- “These inputs are related”
- “This is where the user enters data”
- “When the user clicks submit, send that data somewhere”

### Example:
```html
<form>
  <input type="text" name="email">
  <input type="password" name="password">
  <button>Submit</button>
</form>
```

This groups the inputs so they can be submitted together.

### Important attributes:
- `action` = where to send the data
- `method` = how to send it (`GET` or `POST`)

Example:
```html
<form action="/login" method="POST">
```

That means when the user submits, the browser sends the data to `/login` using POST.

### In your project
In this login page, the form is used to collect:

- email
- password

and then the login button is part of that form. It’s not doing anything fancy by itself; it mainly organizes the inputs so the browser can handle them as a single form.

`required` tells the browser that the input must contain a value before the form can be submitted.

In your project:

```html
<input type="text" required>
<input type="password" required>
```

This means:

- the email field cannot be empty
- the password field cannot be empty
- the browser automatically shows a validation message if either is blank
- the form submission is stopped until both fields contain something

Without `required`, the browser would allow the form to submit with empty fields.

It only checks that the fields are not empty. It does not verify that the email is actually valid or that the password is secure. For email validation, you could use:

```html
<input type="email" required>
```

`type="email"` checks that the value has a basic email format, such as:

```text
person@example.com
```

Combined with `required`:

```html
<input type="email" required>
```

- `type="email"` checks the format.
- `required` prevents the field from being empty.

You can also add a custom rule with `pattern`:

```html
<input
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
```

Keep in mind that browser validation only provides basic checking. A server should validate the email again before accepting or storing it.


## *<b>CSS</b>*

I’ll check the surrounding CSS and the related HTML so the four margin values can be explained in the layout they actually affect.

Read , lines 55 to 75

Read 

```css
margin: 20px 0 40px;
```

This is the three-value shorthand for:

```css
margin-top: 20px;
margin-right: 0;
margin-bottom: 40px;
margin-left: 0;
```

It applies to each `.form-control` `<div>`, which contains an input and its label.

- `20px` adds space above each form control.
- `0` adds no horizontal margin.
- `40px` adds extra space below each form control.

The result is vertical spacing between the email and password fields while keeping the form controls aligned at the same horizontal position.

CSS margin shorthand follows this order when there are three values:

```text
top | left-and-right | bottom
```

>### **Note:**
>- `margin` controls space <u>outside</u> the element.
>- `padding` controls space <u>inside</u> the element.

From line 91 to the end:

```css
.form-control input:focus,
.form-control input:valid {
    outline: 0;
}
```

This targets an input when either condition is true:

- `:focus` means the user has clicked into or selected the input.
- `:valid` means the input passes HTML validation. Because your inputs have `required`, a non-empty value is considered valid.

The comma means “apply this rule to either selector.”

```css
outline: 0;
```

removes the browser’s default focus outline around the input.

The input still shows its bottom border:

```css
border-bottom: 2px #fff solid;
```

So this rule removes the standard browser outline to keep the design cleaner while the white bottom border remains visible.


From line 108 onward:

```css
.form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

This styles each individual letter inside the label.

- `display: inline-block` allows each letter to move independently.
- `font-size: 18px` sets the letter size.
- `min-width: 5px` gives each letter a small amount of space, including spaces between words.
- `transition` makes the movement smooth over `0.3` seconds. The `cubic-bezier(...)` value controls the bouncing style of the movement.

Then:

```css
.form-control input:focus + label span,
.form-control input:valid + label span {
    color: lightblue;
    transform: translateY(-30px);
}
```

This selects each label letter when:

- the input is focused, or
- the input contains a valid value

The `+` means “the label immediately after the input.” Your HTML has that structure:

```html
<input type="text" required>
<label>Email</label>
```

When the rule applies:

- `color: lightblue` changes the letters to light blue.
- `transform: translateY(-30px)` moves every letter 30 pixels upward.

Because JavaScript placed every letter in its own `<span>`, the letters can be animated individually. The wave-like effect is completed by adding different transition delays to the spans.

## *<b>Javascript</b>*

Line 3 onwards:

```js
labels.forEach(label => {
```

This loops through every label found on line 1. In this project, those are the `Email` and `Password` labels.

```js
label.innerHTML = label.innerText
```

Gets the label’s original text and replaces its HTML with newly created content.

```js
.split('')
```

Splits the text into individual characters:

```js
['E', 'm', 'a', 'i', 'l']
```

```js
.map((letter, idx) => 
  `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
)
```

Creates one `<span>` for each character.

- `letter` is the current character.
- `idx` is the character’s position, starting at `0`.
- `idx * 50` creates a different delay for each letter.
- `ms` means milliseconds.

For `Email`, the generated HTML is approximately:

```html
<span style="transition-delay:0ms">E</span>
<span style="transition-delay:50ms">m</span>
<span style="transition-delay:100ms">a</span>
<span style="transition-delay:150ms">i</span>
<span style="transition-delay:200ms">l</span>
```

The delay causes the letters to move one after another instead of all at the same time, creating the wave effect.

```js
.join('')
```

Combines all the generated `<span>` elements into one string and places them inside the label.

So the whole block changes:

```html
<label>Email</label>
```

into individually animated letters:

```html
<label>
  <span style="transition-delay:0ms">E</span>
  <span style="transition-delay:50ms">m</span>
  <span style="transition-delay:100ms">a</span>
  <span style="transition-delay:150ms">i</span>
  <span style="transition-delay:200ms">l</span>
</label>
```