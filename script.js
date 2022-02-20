const toggleButton = document.getElementsByClassName('nav__toggle')[0];
const navLinks = document.getElementsByClassName('nav__item');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navLinks.length; i++)
    navLinks[i].classList.toggle('active');
})