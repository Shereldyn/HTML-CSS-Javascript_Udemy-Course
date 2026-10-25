# Day 14 Animated Navigation

## **Description of project**

- This is a simple project in terms of the JavaScript(only about 5 lines).
- Adds an event listener to an icon, where when we click it the active class will be toggled.
- When it is active the navigation bar is completely visible.
- When the navigation bar is not active it will shrink and the links start to rotate and ultimately disappear(setting the opacity to 0).
- And the x does a rotation and turns into 2 lines.
- Can be used on any website or application.
- This project will mainly contain CSS.
- Multiple transitions will come into play when we toggle the active class.

**Original Project Source:** https://dribbble.com/shots/2427219-Header-Navigation-Day-053-dailyui


## **Coding Notes**

## *<b>CSS</b>*

### **`transform` Property**

The `transform` property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

**Syntax:**
```CSS
transform: none | transform-functions | initial | inherit;
```

#### **`rotateY()` Function**

The CSS `rotateY()` function is used within the [transform](https://www.w3schools.com/cssref/css3_pr_transform.php) property, and defines a 3D rotation of an element around its y-axis at a given degree.

*This means that it swivels an element left or right (<b>like a swinging door</b>).*

**Syntax:**
```CSS
rotateY(angle)
```

> **Note:** To activate a 3D space, the element needs [perspective](https://www.w3schools.com/cssref/css3_pr_perspective.php). Without perspective, any 3D transforms will look flat and two-dimensional. 

> ```CSS
>nav.active .icons .line1 {
>    transform: rotate(-765deg) translateY(5.5px);
>}
>```
>- `nav.active .icons .line1`: calls the `line1` element within when `nav` has the class of active to be styled.
>- `transform:` applies a combined 2D rotation and translation to the `line1` element.
>- `rotate(-765deg)`: rotates `line1` **anti-clockwise by 75deg**. This happens because -765deg completes two full anti-clockwise rotations(-720deg) plus an additional -45deg. Visually, the extra 45deg points the top of `line1` toward the top-corner of the button.
>- `translateY(5.5px)`: moves `line1` **5.5 pixels downward along its newly rotated local Y-axis**.<br>
>
>*Because the transformation follows the order of declaration, the elements rotates first, and then moves "down" relative to its new, tilted orientation rather than the original page layout.*