<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Mon Portfolio</title>
</head>

<body>
    <nav>
        <div id="nav-logo-section" class="nav-section">
            <a href="#" class="menu-btn">Portfolio </a>
        <i class="fa-solid fa-bars" id="menu-icon"></i>
        </div>

        <div id="nav-contact-section" class="nav-section">
            <a href="#home" class="active">ACCEUIL</a>
            <a href="#about">A PROPOS DE MOI</a>
            <a href="#services">PROJETS</a>
            <a href="#portfolio">COMPÉTENCES</a>
            <a href="#contact">CONTACTEZ-MOI</a>
        </div>
    </nav>


    <!-- menu section -->

    <section class="home" id="home">
        <div class="home-content">
            <h3>Salut, c'est moi</h3>
            <h1>Vincent Fougère</h1>
            <h3>Et je suis un <span class="multiple-text"></span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sem in lacus placerat venenatis eget
                id
                libero.</p>
            <div class="container">
                <div class="bar"></div>
                <div class="button-container">
                    <div class="button" style="--color: #00FF7F">
                        <div class="dot"></div>
                        <div class="light"></div>
                        <button>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <span class="social-neon">LinkedIn</span>
                        </button>
                    </div>
                    <div class="button" style="--color: #00FF7F">
                        <div class="dot"></div>
                        <div class="light"></div>
                        <button>
                            <i class="fa-brands fa-discord"></i>
                            <span class="social-neon">Discord</span>
                        </button>
                    </div>
                    <div class="button" style="--color: #00FF7F">
                        <div class="dot"></div>
                        <div class="light"></div>
                        <button>
                            <i class="fa-brands fa-facebook"></i>
                            <span class="social-neon">Facebook</span>
                        </button>
                    </div>

                </div>
                

            </div>
            <div class="social-media">
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-discord"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <a href="#" class="btn">Télécharger le CV</a>

        </div>

        <div class="home-img">
            <img src="images/boxed-water-is-better-Tu1AchSx2Hc-unsplash.jpg" alt="">
        </div>

    </section>
    

    <!-- about section -->
    <section class="about" id="about">
        <div class="about-img">
            <img src="images/boxed-water-is-better-Tu1AchSx2Hc-unsplash.jpg" alt="">
        </div>
        <div class="about-content">
            <h2 class="heading">A propos de <span>Moi</span></h2>
            <h3>Étudiant à l'EPSI</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ullam eius eveniet impedit? Tempora,
                laudantium eos. Unde modi inventore voluptatum error magni nisi iure perferendis, quae debitis sapiente
                sequi repellendus delectus in adipisci. Dolores alias quasi nostrum inventore, totam, aspernatur
                delectus, ex mollitia sit ad officiis.</p>
            <a href="#" class="btn">Lire plus</a>
        </div>
    </section>

    <!-- services section design  -->
    <section class="services" id="services">
        <h2 class="heading">Mes <span>Projets</span></h2>

        <div class="services-container">
            <div class="services-box" id="1">
                <i class="fa-solid fa-code"></i>
                <h3 id="refenrence">Projet 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab suscipit, pariatur quos
                    excepturi commodi velit magnam hic illum assumenda expedita quod placeat esse maxime ut ex
                    nesciunt quibusdam? Ipsum, ipsam illo.</p>
                <a href="#services-box" class="btn">En Savoir Plus</a>
            </div>

            <div class="services-box" id="2">
                <i class="fa-solid fa-code"></i>
                <h3>Projet 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab suscipit, pariatur quos
                    excepturi commodi velit magnam hic illum assumenda expedita quod placeat esse maxime ut ex
                    nesciunt quibusdam? Ipsum, ipsam illo.</p>
                <a href="#services-box" class="btn">En Savoir Plus</a>
            </div>

            <div class="services-box" id="3">
                <i class="fa-solid fa-code"></i>
                <h3>Projet 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab suscipit, pariatur quos
                    excepturi commodi velit magnam hic illum assumenda expedita quod placeat esse maxime ut ex
                    nesciunt quibusdam? Ipsum, ipsam illo.</p>
                <a href="#services-box" class="btn">En Savoir Plus</a>
            </div>
            <div class="services-box" id="4">
                <i class="fa-solid fa-code"></i>
                <h3>Projet 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab suscipit, pariatur quos
                    excepturi commodi velit magnam hic illum assumenda expedita quod placeat esse maxime ut ex
                    nesciunt quibusdam? Ipsum, ipsam illo.</p>
                <a href="#services-box" class="btn">En Savoir Plus</a>
            </div>
        </div>
    </section>

    <!-- Portfolio section design  -->

    <section class="portfolio" id="portfolio">
        <h2 class="heading">Mes <span>Compétences</span></h2>

        <ul>
            <li style="--color: #FF5722">
                <span class="base"></span>
                <span class="title">HTML5</span>
                <span class="icon">
                    <i class="fa-brands fa-html5 rotate"></i>
                </span>
                
                <span class="number">90</span>
            </li>
            <li style="--color: #2196F3">
                <span class="base"></span>
                <span class="title">CSS3</span>
                <span class="icon">
                    <i class="fa-brands fa-css3-alt rotate"></i>
                </span>
                <span class="number">90</span>
            </li>
            <li style="--color: #FFC107">
                <span class="base"></span>
                <span class="title">Javascript</span>
                <span class="icon">
                    <i class="fa-brands fa-square-js rotate"></i>
                </span>
                <span class="number">53</span>
            </li>
            <li style="--color: #9C27B0">
                <span class="base"></span>
                <span class="title">PHP</span>
                <span class="icon">
                    <i class="fa-brands fa-php"></i>
                </span>
                <span class="number">65</span>
            </li>
            <li style="--color: #03A9F4">
                <span class="base"></span>
                <span class="title">MySQL</span>
                <span class="icon">
                    <i class="fa-solid fa-database"></i>
                </span>
                <span class="number">62</span>
            </li>
        </ul>
    </section>


    <?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $numero = $_POST['numero'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];

    // Construction du contenu du mail
    $contenu = "Nom : " . $nom . "\n";
    $contenu .= "Email : " . $email . "\n";
    $contenu .= "Numéro de téléphone : " . $numero . "\n\n";
    $contenu .= "Message : \n" . $message;

    // En-têtes du mail
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Envoyer l'e-mail
    if(mail("vincent.fougere77@gmail.com", $objet, $contenu, $headers)){
        // Redirection vers la page de confirmation avec un message de confirmation
        header("Location: confirmation.php?message=Votre%20e-mail%20a%20été%20envoyé%20avec%20succès.");
        exit();
    } else {
        // Redirection vers la page d'erreur avec un message d'erreur
        header("Location: erreur.php?message=Une%20erreur%20s'est%20produite%20lors%20de%20l'envoi%20de%20l'e-mail.%20Veuillez%20réessayer.");
        exit();
    }
}
?>


    <!-- contact section  -->

    <section class="contact" id="contact">
    <h2 class="heading">Contactez <span>Moi!</span></h2>
    <form method="POST" action="index.php">
        <div class="input-box">
            <input type="text" name="nom" placeholder="Nom Complet">
            <input type="email" name="email" placeholder="Email">
        </div>
        <div class="input-box">
            <input type="number" name="numero" placeholder="Mobile Number">
            <input type="text" name="objet" placeholder="Objet du courriel">
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Votre Message"></textarea>
        <input type="submit" value="Envoyer" class="btn">
    </form>
</section>

<!-- loader  -->
<div class="loader-wrapp">
    <div class="loader"></div>
</div>

<!-- footer  -->
<footer class="footer">
    <div class="footer-text">
        <p>Droits d'auteur &copy; 2023 par Vincent Fougère | Tous droits réservés.</p>
    </div>
    
    <div class="footer-iconTop">
        <a href="#home">
            <i class="fa-sharp fa-solid fa-arrow-up"></i>
        </a>
    </div>
</footer>

<!-- jquerry  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- hide loader -->
<script>
    $(window).on("load", function(){
      $(".loader-wrapp").fadeOut("slow");
    });
</script>

<!-- scrool reveal  -->
<script src="https://unpkg.com/scrollreveal"></script>
<!-- typed js  -->
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
<!-- js  -->
<script src="js.js"></script>

</body>



</html>