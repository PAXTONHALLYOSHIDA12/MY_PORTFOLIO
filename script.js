// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Keep Dark Mode State on Reload
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Trigger animations when elements come into view
    fadeInOnScroll();
};

// Smooth Scroll Animations
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    function checkPosition() {
        fadeInElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
}
