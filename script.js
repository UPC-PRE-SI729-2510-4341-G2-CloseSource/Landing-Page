const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const navItems = navLinks.querySelectorAll('a');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});