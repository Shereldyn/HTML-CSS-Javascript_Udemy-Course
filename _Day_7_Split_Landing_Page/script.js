const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
//brings in all the class from the HTML

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
//adds and removes the hover-left class from the container there causing the panel sizing changes

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
//adds and removes the hover-right class from the container there causing the panel sizing changes