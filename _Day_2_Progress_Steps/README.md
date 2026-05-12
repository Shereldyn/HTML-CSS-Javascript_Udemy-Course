#Day 2 Progress Steps Project

<h3>Description of project</h3>

<li>In this project, we're going to build some progress steps.</li>
<li>These can be found in different kinds of websites with forms example like multi-level forms, shopping carts, etc.</li>
<li>The progress bar will go from one point/step to the next by clicking the buttons.</li>
<li>There will be no forms but there will be buttons to control the steps and a transition line that will light up between the progressed points/steps.</li>
<li>The buttons will allow us to go to the previous or the next point.</li>
<li>However the previous button will be disabled while on the first step/point and the next button while on the last.</li>

<h4>Coding notes</h4>

A <b>selector</b> is used to find or select the HTML element you want to style.
A CSS <b>pseudo-element</b> is a keyword that can be added to a selector(used to find or select the HTML element you want to style), to style a specific part of an element. Pseudo elements are denoted by a double colon(<b>::</b>) followed by the pseudo-element name, example 'p::before'. 

<b>Pseudo-elements and some common uses:</b>
<li><b>::first-line</b>   styles the first line of text.</li>
<li><b>::first-letter</b>   styles the first letter of text.</li>
<li><b>::before</b>   inserts content before an element.</li>
<li><b>::after</b>   inserts content after an element.</li>
<li><b>::marker</b>   styles list item markers, example the bullets or numbers in a list.</li>
<li><b>::selection</b>   styles user-selected text(when text is clicked the text style will change accordingly).</li>
<li><b>::backdrop</b>   styles the viewbox behind the dialog box or popover element.</li>

<br>
Several pseudo elements can also be combined, you merely need to style them separately while using the same selector.
<br>For Example:    <br>
p::first-letter {   <br>
    color: red; <br>
    font-size: xx-large;    <br>
}
<br><br>
p::first-line {   <br>
    color: blue; <br>
    font-variant: small-caps;    <br>
}
<br><br>