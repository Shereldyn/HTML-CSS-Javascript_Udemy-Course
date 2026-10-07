/*
Instructions to try out code myself:
- Bring in toggle buttons (querySelectorAll)
- Loop through nodelist (forEach)
- Add click event (addEventListener)
- Toggle the active class on the parent node (.parentNode & classList.toggle())

The code that was commented out was my attempt, I thought I would be able to use similar code to Day 1's Expanding cards project

*The reason my code did not work is explained as follows:
# The commented code puts active on the toggle button, but this project’s CSS looks for .faq.active on the parent FAQ, so the answer and active styles wouldn’t appear. 
# Also, removeActiveClasses() removes active from buttons, not FAQ containers; the working line toggles the class on the parent and lets each FAQ open or close independently.
*/

const faqToggle = document.querySelectorAll('.faq-toggle');

faqToggle.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
        /*
        // removeActiveClasses();
        // toggle.classList.add('active');
        */
    })
})

/*
// function removeActiveClasses() {
//     faqToggle.forEach(toggle => {
//         toggle.classList.remove('active');
//     })
// }
*/


