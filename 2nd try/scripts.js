// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
    // Example: Add event listener for buttons
    const ctaButtons = document.querySelectorAll('.cta a');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});
