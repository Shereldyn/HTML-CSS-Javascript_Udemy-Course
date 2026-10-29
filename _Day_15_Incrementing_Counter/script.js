const counterNum = document.querySelectorAll('.counter');//finds every counter element and stores the resulting collection in the Node list counterNum

counterNum.forEach(counter => {
    //runs code inside the braces once for each counter element, for each pass counter refers to the current counter element
    counter.innerText = '0';

    const updateCounter = () => {
        //updates the counter, it's defined inside the forEach so each counter gets its own function and target value.
        const targetAmnt = +counter.getAttribute('data-count-to');//*reads the element's data-count-to attribute --which is set in the HTML --and converts its value from a string to a number. 
        const c = +counter.innerText;//*Reads the current displayed count and converts it to a number, so it can later be compared and added numerically.

        const increment = targetAmnt / 200;//#Calculates how much to add on each update. Dividing by 200 makes the count approach its target over roughly 200 updates. The exact number of updates can vary because the code rounds each displayed value up.

        if (c < targetAmnt) {
            //checks whether the current count is still below the target
            counter.innerText = `${Math.ceil(c + increment)}`;
            /*
            # `${}`: creates a template string which turns the result into text for display

            # Math.ceil(): rounds result up to the next whole number

            # c + increment: adds the increment to the current count/display value.
            */
            setTimeout(updateCounter, 1);
            /*
            *Schedules updateCounter to run again after a delay of 1 millisecond. This gives the count a chance to update gradually rather than setting it to the target immediately. 
            The delay is a minimum, not a guarantee that updates happen exactly every millisecond.
            */
        } else {
            counter.innerText = targetAmnt;//*When the current is no longer below the target, sets the displayed value to the exact target. This ensures the final count doesn't end up higher than the target due to rounding.
        }
    }

    updateCounter();
})