<?php
if (isset($_GET['message'])) {
    $message = $_GET['message'];

    if ($message == 'success') {
        $messageText = "Votre message a été envoyé avec succès !";
    } elseif ($message == 'failed') {
        $messageText = "Échec de l'envoi du message. Veuillez réessayer.";
    } else {
        $messageText = "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    $messageText = "Une erreur s'est produite lors de l'envoi du message.";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Confirmation de l'envoi du message</title>
    <style>
        /* Ajoutez votre CSS personnalisé ici */
        /* Par exemple, pour styliser le message, vous pouvez utiliser la classe "message" */
        .message {
            color: #333;
            font-size: 18px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h2>Confirmation de l'envoi du message</h2>
    <div class="message"><?php echo $messageText; ?></div>
    <!-- Ajoutez d'autres éléments HTML si nécessaire -->
</body>
</html>
