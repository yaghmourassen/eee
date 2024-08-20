document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded successfully!");

    // Smooth scroll for internal links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (themeToggle && sunIcon && moonIcon) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            sunIcon.classList.toggle('d-none');
            moonIcon.classList.toggle('d-none');
            console.log('Dark mode toggled. Body class:', document.body.className);
        });
    } else {
        console.error('Theme toggle elements not found.');
    }
});
