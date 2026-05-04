const panels = document.querySelectorAll('.panel') //creating panel variable

panels.forEach((panel) => {  //high order array method
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
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

This can be shown if you code 'console.log(panels)' and we open up our chrome devtools on the webpage, you'll see that it prints out this node list with each div and some properties and I can target specific panels.
Like if I put zero in 'console.log(panels)' (which will be 'console.log(panels[0])') because arrays are zero index, it's going to give me the very first panel.
You can see it has the class of active so I could get the second one with one and so on.

Now you can also loop through a node list just like you can with an array.
And that's how we'll change the panel's class to active.
I want to take my panels and use a for each, which is a high order array method and these methods take in a function as an argument.

So you could do a 'function' or what you usually see is an arrow function like this '=>'.

And then we need to pass in here whatever we want to use for each iteration.

These are panels.

So I'm going to use panel singular and I can console.log here panel and it's just going to loop through

and show me each panel.

Now, what do we actually want to do here?

We want to have an event listener on each of these so that if we click it, something happens.

So we'll take each panel and say, Add event listener and I want to listen for a click.

And when that click happens, we're going to run a function.

And for that function, let's just do a console log here and I'll just say, I don't know, one, two,

three.

And if I click on any of these, we're going to log one, two, three.

So I want to whatever one we click on, I want to add a class of active.

So if I say panel class list, that gives me a list of the classes.

But we also have methods on this class list object like add where we can specifically out of class and

I'm going to add a class of active.

So now if I only just close this, if I click on this one, it gets added the class of active which

then changes it to flex five.

If I click on this one, same thing, but you can see that active is still on these other ones.

So it's expanding them, but it's not it's not retracting the other ones.

So what we'll do is before we put a class of active, let's remove the class of active on all of the

other ones.

So I'm going to have a function here called remove active classes and we'll create that down here as

a function, remove active classes.

Now since there's more than one panel, we again, we're going to loop through them and then remove

all the active classes.

So we're going to do just what we did above.

So panel dot for each and ID here, we'll put an arrow function.

Now when you have an arrow function with just one argument like this, because we can also get the index,

we can get the, the complete array.

But since we're only, we only need this one panel, we don't even need these curly sorry, these parentheses.

We can just do this.

All right?

And up here we can do the same thing.

I mean, you can keep them if you want, but you don't have to.

And then in here, let's say for the particular panel that we're looping through, we want on the class

list.

Objects we want to call remove and we want to remove all the active classes.

So now what's going to happen is when we click, it's going to remove all the active classes from all

of them and then put the active class on the one we click.

So if I click here,

looks like I messed something up.

Panel is not defined oh panels.

So we're looping through panels here, which is coming from here.

All right.

So if I click on this now, you'll see we get the effect that we want, because right before it adds

the active class to this, it takes it off the rest of them.

Now, one thing I would like to change, though, is as soon as I click on this, you'll see the H three

and it has that kind of weird falling down effect.

So let's add a transition to the opacity on the H3.

So I'm going to go to the active H3 and let's add a transition here and let's say opacity.

So we want to add a transition on the opacity 03.60. 3 seconds and Ease in.

Let's add a delay as well.

So we'll add 0.4 seconds on the delay.

And now if I click, you see that it doesn't actually fade in until the until the card is fully expanded,

which is a lot smoother than how it was before.

So that's pretty much it, guys.

I mean, you can make these into any kind of card.

It doesn't have to be just a heading with a background image.

It could be like a testimonial or absolutely anything you want.

So hopefully this helps you in building further projects with little widgets like this.
*/