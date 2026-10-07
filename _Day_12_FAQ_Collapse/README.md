# Day 12 FAQ Collapse

## **Description of project**

- [Dribbble.com](https://dribbble.com) is apparently a great place to get inspiration for projects.
- We're going to recreate a project from [dribbble.com](https://dribbble.com), this project is created by James and called FAQ.
- It's basically cards that expand that have questions and answers.
- We're going to use a lot of CSS because we're going to use font-Awesome.
- We're not going to put the comment icons in the HTML, instead we're going to use the specific Unicode for these fonts/icons in CSS.
- Then we're going to position them and add JavaScript so that we can open and close the tabs to see the answers.
- CSS will take the most time and JavaScript should be easy, we just need to toggle the active class on the parent node.

## **Coding Notes**

## *<b>HTML</b>*

```HTML
    <button class="faq-toggle">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
    </button>
```
- `<i>` is an inline HTML element used here as a container for an icon. 
    -  `class` gives Font Awesome the styling instructions:
        - `fas` : selects Font Awesome’s solid icon style.
        - `fa-chevron-down` : displays a downward chevron.
        - `fa-times` : displays an X icon.

*The CSS switches which icon is visible when the FAQ is active.*

## *<b>CSS</b>*

```CSS
.faq.active::before,
.faq.active::after {
    content: '\f075';
    font-family: 'Font Awesome 5 Free';
    ...
}
```

- `.faq.active::before` : calls the back of the active `faq` element
- `,`: joins the two elements to have the same styling
- `.faq.active::after` : calls the front of the active `faq` element
- `content: '\f075';` : uses unicode to assign the speech bubble icon to the content of both elements.
- `font-family: 'Font Awesome 5 Free';` : assigns external font as the font style, this tells the browser to render `\f075` as a Font Awesome speech-bubble icon.

The shared rule applies the same Font Awesome speech-bubble glyph to both pseudo-elements, so the active FAQ gets two bubbles. The separate `.faq.active::before` rule then recolors, shifts, and flips one bubble; `::after` keeps the original green color and position. Layered together, they create a two-bubble conversation effect.

>**Note:** If you only want one bubble, keep either `::before` or `::after` and remove the other from the shared selector.



## *<b>JAVASCRIPT</b>*

```JavaScript
const faqToggle = document.querySelectorAll('.faq-toggle');

faqToggle.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})
```

- `const faqToggle ... ('.faq-toggle');` : finds every `.faq-toggle` button.
- `faqToggle.forEach ... ('click', () => {` : 
    - `faqToggle.forEach((toggle) => {` : loops through the list of faq toggle buttons.
    - `toggle.addEventListener('click', () => {` : adds a click listener to each `.faq-toggle` button.
- `toggle.parentNode.classList.toggle('active');` :
    - `toggle.parentNode` selects its parent FAQ element.
    - `classList.toggle('active')` adds `active` if it’s missing or removes it if it’s already there. *The CSS uses this class to show or hide the FAQ answer and change the card’s appearance.*