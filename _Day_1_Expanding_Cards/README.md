# Day 1 Expanding Cards

<h2>Description of project</h2>

<li>In this project, we're going to build some expanding cards, we were going to style panels to have a background image and a heading.</li>
<li>We're going to use Flexbox to align everything and then add a little bit of JavaScript so that when we click one of the panels, it changes the class to active and it then expands with a CSS transition.</li>
<li>We'll be using JavaScript for the event.Listeners and we will be using CSS transitions to give it the smooth through the effect.</li>
<li>Due to the transitions we'll see the heading doesn't come in until the card is fully expanded.</li>
<li>We'll be using only background images and headings, but we could even make these into testimonials or FAQs, or whatever it might be.</li>

<h3>Coding Notes</h3>
<u><h4 style="font-size: 17px;">CSS</h4></u>

<b>CSS selectors</b> are used to "find" (or select) the HTML elements you want to style.
<div>
    We can divide CSS selectors into five categories:
    <li><a href="https://www.w3schools.com/css/css_selectors.asp">Simple selectors</a> select elements based on name('<b>elementname {}</b>'), id('<b>#id {}</b>'), class('<b>.classname {}</b>'), all elements('<b>* {}</b>')</li>
    <li><a href="https://www.w3schools.com/css/css_combinators.asp">Combinator selectors</a> select elements based on a specific relationship between them. There are 4 different combinators: Descendant combinator (<b>space</b>), Child combinator (<b>></b>), Next sibling combinator (<b>+</b>), Subsequent-sibling combinator (<b>~</b>).The code should look like: '<b>selector1 combinator selector2 {}</b>'</li>
    <li><a href="https://www.w3schools.com/css/css_pseudo_classes.asp">Pseudo-class selectors</a> select elements based on a certain state. There are 2 types of pseudo classes: Interactive(user interaction based), and Structural(based on position in the document tree). The code for pseudo classes should look like '<b>selector:pseudo-class-name {}</b>'</li>
    <li><a href="https://www.w3schools.com/css/css_pseudo_elements.asp">Pseudo-elements selectors</a> select and style a part of an element ('<b>selector::pseudo-element-name {}</b>')</li>
    <li><a href="https://www.w3schools.com/css/css_attribute_selectors.asp">Attribute selectors</a> select elements based on an attribute or attribute value('<b>elementname[attribute] {}</b>')</li>
</div><br>
<pre>
<h4 style="display: flex; justify-content: center; align-items: center; margin-top: 0;margin-bottom: 0;">Notes</h4>
<b>Grouping Selector:</b> selects all the HTML elements with the same style definitions. It is better to group the selectors, to minimize code. To group selectors, separate each selector with a comma.
<u>Example</u>:
h1, h2, p {
  text-align: center;
  color: red;
}
</pre>
<br><hr>

The <b>position property</b> specifies the positioning type for an element.
<div>
    This property can have one of the following values:
    <li><b>Static -</b> This is default. Element is positioned according to the normal document flow. Static positioned elements are not affected by the top, bottom, left, and right properties. </li>
    <li><b>Relative -</b> Element is positioned relative to its normal position in the document flow. Setting the top, right, bottom, and left properties will cause the element to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element. </li>
    <li><b>Fixed -</b> Element is positioned relative to the viewport, , which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used set the final location of the element. A fixed element does not leave a gap in the page where it would normally have been located. </li>
    <li><b>Absolute -</b> Element is positioned relative to the nearest positioned ancestor(with position other than static). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling. </li>
    <li><b>Sticky -</b> Element toggles between a relative and fixed position, depending on the scroll position. A sticky element is positioned relative until a certain scroll position is reached - then it "sticks" in that place (like position:fixed).
    Elements are then positioned to their final location with the top, bottom, left, and right properties. </li>
</div>
<br>

<pre>
<h4 style="display: flex; justify-content: center; align-items: center; margin-top: 0;margin-bottom: 0;">Notes</h4>
<li><b>Absolute positioned</b> elements are removed from the normal document flow, and can overlap other elements.</li>
<li>You must specify at least one of the top, right, bottom or left properties, for <b>sticky positioning</b> to work.</li>
</pre>