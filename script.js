const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Merci ! Je vous recontacte sous 24 h.');
        form.reset();
    });