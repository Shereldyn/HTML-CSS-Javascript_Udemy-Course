# Day 1 Expanding Cards

## Description of project

- In this project, we're going to build some expanding cards, we were going to style panels to have a background image and a heading.
- We're going to use Flexbox to align everything and then add a little bit of JavaScript so that when we click one of the panels, it changes the class to active and it then expands with a CSS transition.
- We'll be using JavaScript for the event.Listeners and we will be using CSS transitions to give it the smooth through the effect.
- Due to the transitions we'll see the heading doesn't come in until the card is fully expanded.
- We'll be using only background images and headings, but we could even make these into testimonials or FAQs, or whatever it might be.

## Coding Notes
### CSS

**CSS selectors** are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:
- [Simple selectors](https://www.w3schools.com/css/css_selectors.asp) select elements based on name(`elementname {}`), id(`#id {}`), class(`classname {}`), all elements(`* {}`)
- [Combinator Selectors](https://www.w3schools.com/css/css_combinators.asp) select elements based on a specific relationship between them. There are 4 different combinators: Descendant combinator (`space`), Child combinator (`>`), Next sibling combinator (`+`), Subsequent-sibling combinator (`~`).The code should look like: `selector1 combinator selector2 {}`
- [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) select elements based on a certain state. There are 2 types of pseudo classes: Interactive(user interaction based), and Structural(based on position in the document tree). The code for pseudo classes should look like `selector:pseudo-class-name {}`
- [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp) select and style a part of an element (`selector::pseudo-element-name {}`)
- [Attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) select elements based on an attribute or attribute value(`elementname[attribute] {}`)

>#### **Notes**
>**Grouping Selector:** selects all the HTML elements with the same style definitions. It is better to group the selectors, to minimize code. To group selectors, separate each selector with a comma.<br>
>Example:<br>
>```
>h1, h2, p {
>    text-align: center;
>    color: red;
>}
>```

----
The **position property** specifies the positioning type for an element.

This property can have one of the following values:
- **Static -** This is default. Element is positioned according to the normal document flow. Static positioned elements are not affected by the top, bottom, left, and right properties. 
- **Relative -** Element is positioned relative to its normal position in the document flow. Setting the top, right, bottom, and left properties will cause the element to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
- **Fixed -** Element is positioned relative to the viewport, , which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used set the final location of the element. A fixed element does not leave a gap in the page where it would normally have been located.
- **Absolute -** Element is positioned relative to the nearest positioned ancestor(with position other than static). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
- **Sticky -** Element toggles between a relative and fixed position, depending on the scroll position. A sticky element is positioned relative until a certain scroll position is reached - then it "sticks" in that place (like `position: fixed;`).

Elements are then positioned to their final location with the top, bottom, left, and right properties.

>#### **Notes**
>- **Absolute positioned** elements are removed from the normal document flow, and can overlap other elements.
>- You must specify at least one of the top, right, bottom or left properties, for **sticky positioning** to work.