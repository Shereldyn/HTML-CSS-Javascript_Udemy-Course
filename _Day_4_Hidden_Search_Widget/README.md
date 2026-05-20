# Day 4 Hidden Search Widget

<h2>Description of project</h2>

<li>This is one of the shortest projects in this course.</li>
<li>It's a cool little widget that you can add to your website or to your application, it's a hidden search.</li>
<li>We'll have a button with a little search icon from font Awesome.</li>
<li> And as soon as I click it, it fires off a JavaScript event that activates a specific class where we add a transition for the width of the input to get wider and the button to move over using a 'transform: translateX();' style property.</li>
<li>If clicked again it's going to shrink back up.</li>
<li>So we'll be using CSS transitions along with just a little bit of JavaScript to add the event and toggle the class.</li>

<h3>Coding Notes</h3>
<u><h4 style="font-size: 17px;">JavaScript</h4></u>

The <b>toggle()</b> method adds and removes a class name from an element in JavaScript. <br>
<u>Example</u>: 'search.classList.toggle('active');'

The <b>focus()</b> method gives focus to an element (if it can be focused). The focused element is the element that will receive keyboard and similar events by default. <br>
<u>Example</u>: 'input.focus();'