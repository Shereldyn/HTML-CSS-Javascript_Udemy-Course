# Day 2 Progress Steps Project

## Description of project

- In this project, we're going to build some progress steps.
- These can be found in different kinds of websites with forms example like multi-level forms, shopping carts, etc.
- The progress bar will go from one point/step to the next by clicking the buttons.
- There will be no forms but there will be buttons to control the steps and a transition line that will light up between the progressed points/steps.
- The buttons will allow us to go to the previous or the next point.
- However the previous button will be disabled while on the first step/point and the next button while on the last.

### Coding notes
### CSS

A **selector** is used to find or select the HTML element you want to style.
A CSS **pseudo-element** is a keyword that can be added to a selector(used to find or select the HTML element you want to style), to style a specific part of an element. Pseudo elements are denoted by a double colon(`::`) followed by the pseudo-element name, example `p::before`. 

**Pseudo-elements and some common uses:**
- `::first-line` styles the first line of text.
- `::first-letter` styles the first letter of text.
- `::before` inserts content before an element.
- `::after` inserts content after an element.
- `::marker` styles list item markers, example the bullets or numbers in a list.
- `::selection` styles user-selected text(when text is clicked the text style will change accordingly).
- `::backdrop` styles the viewbox behind the dialog box or popover element.
<br>

>#### **Notes**
>Several pseudo elements can also be combined, you merely need to style them separately while using the same selector.<br>
>Example:
>```
>p::first-letter {
>    color: red;
>    font-size: xx-large;
>}
>
>p::first-line {
>    color: blue;
>    font-variant: small-caps;
>}
>```