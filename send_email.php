<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Valider les données
    if (empty($name) || empty($email) || empty($message)) {
        die("Tous les champs sont requis.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email invalide.");
    }

    // Destinataire
    $to = "eric280eric280@gmail.com"; // Mettez votre email ici
    $subject = "Nouveau message de " . $name;
    $body = "Nom: $name
Email: $email
Message:\n$message";

    $headers = "From: no-reply@votredomaine.com\r
" .
               "Reply-To: $email\r
" .
               "Content-Type: text/plain; charset=UTF-8\r
" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
