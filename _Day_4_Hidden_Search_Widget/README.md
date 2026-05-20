# Day 4 Hidden Search Widget

## Description of project

- This is one of the shortest projects in this course.
- It's a cool little widget that you can add to your website or to your application, it's a hidden search.
- We'll have a button with a little search icon from font Awesome.
- And as soon as I click it, it fires off a JavaScript event that activates a specific class where we add a transition for the width of the input to get wider and the button to move over using a `transform: translateX();` style property.
- If clicked again it's going to shrink back up.
- So we'll be using CSS transitions along with just a little bit of JavaScript to add the event and toggle the class.

## Coding Notes
### CSS

The **toggle()** method adds and removes a class name from an element in JavaScript. <br>
Example: `search.classList.toggle('active');`

The **focus()** method gives focus to an element (if it can be focused). The focused element is the element that will receive keyboard and similar events by default. <br>
Example: `input.focus();`