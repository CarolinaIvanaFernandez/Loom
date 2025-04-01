document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-in');

    images.forEach(image => {
        image.classList.add('visible');
    });
});
