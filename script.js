function validateForm() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Vérification que tous les champs sont remplis
    if (!name || !email || !message) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Veuillez remplir tous les champs.';
        return false;
    }

    // Vérification email simple
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Veuillez entrer un email valide.';
        return false;
    }

    // Si tout est correct
    messageDiv.style.color = 'green';
    messageDiv.textContent = 'Votre message a été envoyé avec succès !';

    // Ici, vous pouvez ajouter votre logique d'envoi (via AJAX ou autre)

    // Empêcher l'envoi réel pour cet exemple
    return false;
}