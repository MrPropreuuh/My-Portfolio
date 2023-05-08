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
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="no-pad">
    <div class="confirmation-grid">
    <!-- <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_x3f1anyl.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;" autoplay></lottie-player> -->
    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_R09JykuodG.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;" autoplay></lottie-player>
        <h2>Confirmation de l'envoi du message</h2>
        <div class="message">
            <p><?php echo $messageText; ?></p>
        </div>
        <!-- Ajoutez d'autres éléments HTML si nécessaire -->
    </div>
    </section>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</body>

</html>