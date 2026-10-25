const navButton = document.getElementById('togOpenClose');
const navContainer = document.getElementById('navigation');

navButton.addEventListener('click', () => navContainer.classList.toggle('active'));