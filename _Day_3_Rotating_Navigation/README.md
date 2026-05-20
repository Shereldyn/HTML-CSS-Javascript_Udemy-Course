# Day 3 Rotating Navigation

## Description of project

- We will have a simple article, this could be for anything at all, any website, any blog, any application, etc.
- And up on the top left of the page we will have a little navigation icon placed on a circle, where circle's center is placed on the corner of the screen.
- Clicking on the navigation icon will rotate the entire website, the entire container. It'll also bring the navigation items from the side.
- And then the navigation icon will change, there are two navigation icons: open and close.
- We're going to position the icons so when clicked the circles, where the icons are placed, rotates and shows the opposite icon/button.
- We will need a little bit of JavaScript to be able to add and remove the specific class(`showNAV`), this will rotate and bring the menu back in.
- This project will mostly deal with CSS. When the `showNav` class is present, the only Javascript we'll need is to add or remove the when we click the navigation icon/button.

### Coding notes
### CSS

The `Transform-origin` property allows you to change the position of transformed elements.
>#### **Notes**
>- 2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element.
>- *The <b>-origin</b> property <b>must</b> be used together with the <b>transform</b> property*.