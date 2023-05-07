<?php
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $numero = $_POST["numero"];
    $objet = $_POST["objet"];
    $message = $_POST["message"];

    // Définir l'adresse e-mail du destinataire
    $to = "vincent.fougere77@gmail.com";

    // Définir le sujet de l'e-mail
    $subject = "Message depuis le formulaire de contact";

    // Définir le contenu de l'e-mail
    $content = "Nom : $nom\n";
    $content .= "Email : $email\n";
    $content .= "Numéro de téléphone : $numero\n";
    $content .= "Objet : $objet\n";
    $content .= "Message : $message\n";

    // Définir les en-têtes supplémentaires
    $headers = "From: $email" . "\r\n";

    // Envoyer l'e-mail
    $success = mail($to, $subject, $content, $headers);

    if ($success) {
        // Rediriger vers la page de confirmation avec le message de succès
        header("Location: confirmation.php?message=success");
        exit();
    } else {
        // Rediriger vers la page de confirmation avec le message d'échec
        header("Location: confirmation.php?message=failed");
        exit();
    }
}
?>
