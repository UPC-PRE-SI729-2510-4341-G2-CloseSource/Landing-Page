// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('.nav-link');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            // Fondo completamente sólido cuando se hace scroll
            navbar.style.background = 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'none'; // Quitar el blur si lo hay
            navbar.style.zIndex = '1000'; // Asegurar que la navbar esté por encima de otros elementos
        } else {
            // Fondo inicial más sólido
            navbar.style.background = 'linear-gradient(135deg, rgba(29, 53, 87, 0.98) 0%, rgba(69, 123, 157, 0.95) 100%)';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(10px)'; // Mantener blur inicial si lo deseas
        }
        lastScroll = currentScroll;
    });
    
    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});