# Day 1 Expanding Cards

<h2>Description of project</h2>

<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>

<h3>Coding Notes</h3>

The position property specifies the positioning type for an element.

This property can have one of the following values:

<li><b>Static -</b> This is default. Element is positioned according to the normal document flow. Static positioned elements are not affected by the top, bottom, left, and right properties. </li>
<li><b>Relative -</b> Element is positioned relative to its normal position in the document flow. Setting the top, right, bottom, and left properties will cause the element to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element. </li>
<li><b>Fixed -</b> Element is positioned relative to the viewport, , which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used set the final location of the element. A fixed element does not leave a gap in the page where it would normally have been located. </li>
<li><b>Absolute -</b> Element is positioned relative to the nearest positioned ancestor(with position other than static). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling. </li>
<li><b>Sticky -</b> Element toggles between a relative and fixed position, depending on the scroll position. A sticky element is positioned relative until a certain scroll position is reached - then it "sticks" in that place (like position:fixed).
Elements are then positioned to their final location with the top, bottom, left, and right properties. </li>
<br>

<pre>
<b>Note:</b>
<li>Absolute positioned elements are removed from the normal document flow, and can overlap other elements.</li>
<li>You must specify at least one of the top, right, bottom or left properties, for sticky positioning to work.</li>
</pre>