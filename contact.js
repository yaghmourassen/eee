document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Extract form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission (Replace with actual form handling logic)
        setTimeout(function () {
            form.reset();
            formMessage.innerHTML = `<div class="alert alert-success">Thank you, ${name}. Your message has been sent!</div>`;
        }, 500);
    });
});
