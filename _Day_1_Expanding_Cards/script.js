const panels = document.querySelectorAll('.panel') //creating panel variable, 'querySelectorAll' used so that all panels can be called into the variable instead of one specific panel

//in order to call each panel instead of only one we need to loop through the panels and use the forEach loop 
panels.forEach((panel) => {  //high order array method -> '
    //* variable.forEach((element class) => {})'
    panel.addEventListener('click', () => { //calling the element class and creating an event listener that will listen for when the user clicks on the panel
        removeActiveClasses()   //function called to remove the active classes at the start of the loop
        panel.classList.add('active')   // adds the class active to the panels  that are clicked
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')    //as the loop goes through each panel the active class is removed
    })
}

/*
For this particular project what we need to do is just be able to change the class on the panels in our JavaScript.

So we need to first bring in all of these panels into the into our JavaScript files.

So I'm going to create a variable called panels and there's different ways to select elements we can use get 'elementbyID', we can use 'querySelector'.

So what 'querySelector' does is allows us to select anything. It could be a paragraph, an H1, a class, an ID, whatever. We want the panels which have a class of panel.

Now, the problem here is there's more than one panel, right?
We have all these divs with panels, so we can't just do this or it's just going to select the first one.
So we need to use 'QuerySelectorAll' in that case and with QuerySelectAll instead of just selecting the element directly, it puts all of the panels into what's called the node list, which is similar to an array.

TODO This can be shown if you code 'console.log(panel)' and we open up our chrome devtools on the webpage, you'll see that it prints out this node list with each div and some properties and I can target specific panels. Like if I put zero in 'console.log(panel)' (which will be 'console.log(panel[0])') because arrays are zero index, it's going to give me the very first panel. You can see it has the class of active so I could get the second one with one and so on.

Now you can also loop through a node list just like you can with an array.
And that's how we'll change the panel's class to active.
I want to take my panels and use a 'forEach', which is a high order array method and these methods take in a function as an argument.
So you could do a 'function' or what you usually see is an arrow function like this '=>'.
And then we need to pass in the brackets whatever we want to use for each iteration(these are panels).
So I'm going to use panel singular and I can console.log and with brackets panel and as a result the code becomes:
*    panels.forEach((panel) => {
*        console.log(panel)
*    })
then it'll just loop through and show each panel.

Now, what do we actually want to do here?
(We can remove console.log((panel)) and then start the next code within the loop)
We want to have an event listener on each of the panels(cards) so that if we click it, something happens.
So we'll take each panel and say, Add event listener and make it listen for a click, and when that click happens, we're going to run a function.
And the aim is for whatever panel we click on, a class of active is added.
So if I say 'panel.classList', that will give a list of the classes. But we also have methods on this class list object like add where we can specifically add a class and I'm going to add a class of active.
Code:
*    panels.forEach((panel) => {
*        panel.addEventListener('click', () => {
*            panel.classList.add('active')
*        })
*    })

So now if I click on another panel, it gets added the class of active which then changes it to 'flex: five'(CSS code which increases the width of the panel).
If I click on another panel, same thing, but you can see that active is still on those other panels we previously clicked.
So it's expanding them, but it's not retracting the other ones.
So what we'll do is before we put a class of active, we'll remove the class of active on all of the other ones.
So I'm going to add a function here called 'removeActiveClasses()' and we'll create that below the 'EventListener' but within the 'forEach' loop.
Code:
*    function removeActiveClasses(){

*    }

Now since there's more than one panel we're going to loop through them and then remove all the active classes.
Code:
*    function removeActiveClasses(){
*        panels.forEach(() => {

*        })
*    }

So 'panel.forEach' and we'll put an arrow function(=>).
Now when you have an arrow function(=>) with just one argument like this, we can also get the index and the complete array('panel.forEach((panel, index, array[?]) => {}').
But since we only need this one panel, we don't even need the extra  parentheses around 'panel'.
We can just do this.
Code:
*    panels.forEach(panel => {
*        ...
*        ...
*        ...
*    })


*    function removeActiveClasses(){
*        panels.forEach(panel => {
            
*        })
*    }

You can keep the parenthesis if you want, but you don't have to.

And then in the loop under 'function removeActiveClasses()', let's say for the particular panel that we're looping through, on the classList objects(each panel) we want to call remove to remove all the active classes.
Code:
*    function removeActiveClasses(){
*        panels.forEach(() => {
*            panel.classList.remove('active')
*        })
*    }


So now what's going to happen is when we click any panel(card), it's going to remove all the active classes from all of them and then put the active class on the one we click.

So if I click here, looks like I messed something up.

* Note that in the loop the variable is used in the code

All right.
So now if we click the panel(card) we'll get the effect that we want, because right before it adds the active class to the panel(card) we clicked, it takes it off the rest of the active classes.

One thing that can be changed though, is as soon as I click on the new panel card, you'll see the H3 has a kind of weird falling down effect.
So we'll add a transition to the opacity on the H3.
So I'm going to go to the active H3 in CSS and let's add a transition style and then say opacity 0.3 seconds and Ease in.
*   transition: opacity 0.3s ease-in ;
We'll add a delay of 0.4 seconds as well.
Code:
*   .panel.active h3{
*       opacity:1;
*       transition:opacity 0.3s ease-in 0.4s;
*   }

And now if I click, you see that it doesn't actually fade in until the until the card is fully expanded, which is a lot smoother than how it was before.

So that's pretty much it.
I mean, you can make these into any kind of card.
It doesn't have to be just a heading with a background image.
It could be like a testimonial or absolutely anything you want.
*/