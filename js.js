globalCard = null

// Loader hide 


const lis = document.querySelectorAll('ul li');

lis.forEach((li, index) => {
  const number = li.querySelector('.number');
  const targetNumber = number.innerText;
  let currentNumber = 0;
  let isHovered = false;

  const base = li.querySelector('.base');
  base.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  base.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  const intervalId = setInterval(() => {
    if (isHovered && currentNumber < targetNumber) {
      currentNumber++;
      number.innerText = currentNumber;
      number.classList.add('fade-in'); // Ajoute la classe fade-in pour appliquer le flou
      setTimeout(() => {
        number.classList.remove('fade-in'); // Supprime la classe fade-in après une courte période de temps
      }, 200);
    } else if (currentNumber === parseInt(targetNumber)) {
      clearInterval(intervalId);
      number.innerText += '%';
    }
  }, 15);
});
// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('#nav-contact-section')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')
};
// scroll sections active link 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('body nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('body nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });

  // sticky navbar 
  let nav = document.querySelector('nav');

  nav.classList.toggle('sticky', window.scrollY > 100);

  // Enleve la navbar quand ont click sur un lien 
  menuIcon.classList.remove('fa-xmark')
  navbar.classList.remove('active')
};



// scroll reaveal animation 
ScrollReveal({
  distance: '80px',
  duration: 1700,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, ul', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

ScrollReveal().clean('.back-card .about-content');
ScrollReveal().clean('.back-card .about-img');
ScrollReveal().clean('.back-card .about-content .heading');
ScrollReveal().clean('.third-card .heading');

// typed js 
const typed = new Typed('.multiple-text', {
  strings: ['Étudiant', 'Développeur', 'Technophile'],
  typeSpeed: 50,
  backSpeed: 100,
  backdelay: 1500,
  loop: true
});


// Sélectionnez toutes les cartes
const cards = document.querySelectorAll('.services-box');
const container = document.querySelector('.services-container');

// Ajoutez un écouteur d'événement à chaque carte
cards.forEach(function (card) {
  card.addEventListener('click', function (event) {
    // Récupérez l'ID de la carte cliquée
    const clickedCardId = card.getAttribute('id');

    // Supprimez toutes les classes d'animation des cartes
    cards.forEach(function (card) {
      card.classList.remove(
        'animation-services-box1',
        'animation-services-box2',
        'animation-services-box3',
        'animation-services-box4',
        'animation-services-box5',
        'animation-services-box6',
        'animation-services-box7',
        'animation-services-box8',
        'animation-services-box9',
        'animation-services-box10',
        'animation-services-box11',
        'animation-services-box12',
        'animation-services-box13',
        'animation-services-box14',
        'animation-services-box15'
      );
    });

    // Supprimez toutes les classes uniques du conteneur
    container.classList.remove(
      'unique-class-1',
      'unique-class-2',
      'unique-class-3',
      'unique-class-4'
    );

    // Effectuez les actions en fonction de l'ID de la carte cliquée
    switch (clickedCardId) {
      case '1':
        globalCard = [card, clickedCardId]
        // Ajoutez les classes d'animation à la carte 1
        card.classList.add('animation-services-box1');
        container.classList.add('unique-class-1');
        document.getElementById('2').classList.add('animation-services-box2');
        document.getElementById('3').classList.add('animation-services-box3');
        document.getElementById('4').classList.add('animation-services-box4');

        // Sélectionnez l'élément avec l'id "1"
        const element1 = document.getElementById('1');

        // Créez un nouvel élément d'image
        const image = document.createElement('img');
        image.src = 'images/00001-1586320219.png'; // Chemin de l'image

        // Remplacez l'icône par l'image
        const icon = element1.querySelector('.fa-solid.fa-code');
        icon.parentNode.replaceChild(image, icon);

        // Modifier le texte des éléments <h3> et <p>
        const titreElement = element1.querySelector('h3');
        titreElement.textContent = 'Site de ticketing';

        const contenuElement = element1.querySelector('p');
        contenuElement.textContent = 'Le site de ticketing a été conçu en HTML, CSS, PHP et MySQL, qui offre aux techniciens la possibilité de visualiser et résoudre les problèmes situés dans les salles grâce à un système de tickets mis à la disposition des élèves.';

        break;



      case '2':
        // Ajoutez les classes d'animation à la carte 2
        card.classList.add('animation-services-box5');
        container.classList.add('unique-class-2');
        document.getElementById('1').classList.add('animation-services-box6');
        document.getElementById('3').classList.add('animation-services-box7');
        document.getElementById('4').classList.add('animation-services-box8');

        // Sélectionnez l'élément avec l'id "2"
        const element2 = document.getElementById('2');

        // Créez un nouvel élément d'image
        const image2 = document.createElement('img');
        image2.src = 'images/00004-1583120935.png'; // Chemin de l'image

        // Remplacez l'icône par l'image
        const icon2 = element2.querySelector('.fa-solid.fa-code');
        icon2.parentNode.replaceChild(image2, icon2);

        // Modifier le texte des éléments <h3> et <p>
        const titreElement2 = element2.querySelector('h3');
        titreElement2.textContent = 'Stage 1er année';

        const contenuElement2 = element2.querySelector('p');
        contenuElement2.textContent = "Le site administratif de judo développé en HTML, CSS, JS et PHP permet de facilité l'organisation du travail de l'administration de l'association de judo, offrant des fonctionnalités essentielles pour une gestion efficace.";

        break;


      case '3':
        // Ajoutez les classes d'animation à la carte 3
        card.classList.add('animation-services-box9');
        container.classList.add('unique-class-3');
        document.getElementById('1').classList.add('animation-services-box10');
        document.getElementById('2').classList.add('animation-services-box11');
        document.getElementById('4').classList.add('animation-services-box12');
        // Sélectionnez l'élément avec l'id "3"
        const element3 = document.getElementById('3');

        // Créez un nouvel élément d'image
        const image3 = document.createElement('img');
        image3.src = 'images/00005-1219564920.png'; // Chemin de l'image pour la carte 3

        // Remplacez l'icône par l'image
        const icon3 = element3.querySelector('.fa-solid.fa-code');
        icon3.parentNode.replaceChild(image3, icon3);

        // Modifier le texte des éléments <h3> et <p>
        const titreElement3 = element3.querySelector('h3');
        titreElement3.textContent = 'Stage 2eme année';

        const contenuElement3 = element3.querySelector('p');
        contenuElement3.textContent = "J'ai réalisé un site complet d'assurance sur WordPress, en développant des plugins en PHP spécifiquement conçus pour WordPress. Ces plugins permettent de gérer les devis et de traiter les demandes des clients de manière efficace.";

        break;

      case '4':
        // Ajoutez les classes d'animation à la carte 4
        card.classList.add('animation-services-box13');
        container.classList.add('unique-class-4');
        document.getElementById('1').classList.add('animation-services-box14');
        document.getElementById('2').classList.add('animation-services-box15');
        document.getElementById('3').classList.add('animation-services-box15');

        // Sélectionnez l'élément avec l'id "4"
        const element4 = document.getElementById('4');

        // Créez un nouvel élément d'image
        const image4 = document.createElement('img');
        image4.src = 'images/00006-2147606139.png'; // Chemin de l'image pour la carte 4

        // Remplacez l'icône par l'image
        const icon4 = element4.querySelector('.fa-solid.fa-code');
        icon4.parentNode.replaceChild(image4, icon4);

        // Modifier le texte des éléments <h3> et <p>
        const titreElement4 = element4.querySelector('h3');
        titreElement4.textContent = 'Portfolio et Site de moto fictif';

        const contenuElement4 = element4.querySelector('p');
        contenuElement4.textContent = "J'ai réalisé ce site de portfolio en utilisant HTML, CSS, PHP et JavaScript. De plus, dans le cadre de mon parcours, je travaille actuellement sur un site fictif de mise en vente de motos.";

        break;

      default:
        break;

    }

    event.stopPropagation(); // Arrêtez la propagation de l'événement pour éviter de déclencher l'écouteur d'événement du document
  });
});


// Ajoutez un écouteur d'événement au document pour supprimer les classes d'animation lorsque vous cliquez en dehors des cartes
document.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const isInsideCard = clickedElement.closest('.services-box');

  // Si vous cliquez à l'extérieur des cartes
  if (!isInsideCard) {

    // Supprimez toutes les classes d'animation des cartes
    cards.forEach(function (card) {
      card.classList.remove(
        'animation-services-box1',
        'animation-services-box2',
        'animation-services-box3',
        'animation-services-box4',
        'animation-services-box5',
        'animation-services-box6',
        'animation-services-box7',
        'animation-services-box8',
        'animation-services-box9',
        'animation-services-box10',
        'animation-services-box11',
        'animation-services-box12',
        'animation-services-box13',
        'animation-services-box14',
        'animation-services-box15'
      );
    });

    // Supprimez toutes les classes uniques du conteneur
    container.classList.remove(
      'unique-class-1',
      'unique-class-2',
      'unique-class-3',
      'unique-class-4'
    );

  }
  document.getElementById(globalCard[1]) = globalCard[0];
});
// A propos de moi 

function toggleCards(event) {
  event.preventDefault();

  var frontCard = document.getElementById("front-card");
  var backCard = document.getElementById("back-card");

  frontCard.style.display = "none";
  backCard.classList.remove("hidden");
  backCard.classList.add("show"); // Ajoute la classe "show" pour appliquer les animations personnalisées

  // Ajoutez et supprimez une classe temporaire pour forcer le redessin du navigateur
  backCard.classList.add("force-redraw");

  // Utilisez setTimeout pour attendre que le redessin se produise avant de supprimer la classe temporaire
  setTimeout(function () {
    backCard.classList.remove("force-redraw");
  }, 0);
}

function toggleThirdCard(event) {
  event.preventDefault();
  var backCard = document.getElementById("back-card");
  var thirdCard = document.getElementById("third-card");
  var about = document.getElementById("about");

  backCard.classList.remove("show");
  backCard.classList.add("hidden");
  thirdCard.classList.remove("hidden");
  thirdCard.classList.add("show");
  about.classList.add("third");

  // Ajoutez et supprimez une classe temporaire pour forcer le redessin du navigateur
  thirdCard.classList.add("force-redraw");

  // Utilisez setTimeout pour attendre que le redessin se produise avant de supprimer la classe temporaire
  setTimeout(function () {
    thirdCard.classList.remove("force-redraw");
  }, 0);
}


// dropdown-menu 
document.addEventListener('DOMContentLoaded', function () {
  var dropdownButtons = document.querySelectorAll('.blog-dropdown .dropdown-btn');

  dropdownButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var dropdownContent = this.nextElementSibling;
      var icon = this.querySelector('i');

      // Vérifier si le menu est déjà ouvert
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-chevron-down');
      } else {
        closeAllDropdowns();
        dropdownContent.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-minus');
      }
    });
  });

  function closeAllDropdowns() {
    var dropdownContents = document.querySelectorAll('.blog-dropdown .dropdown-content');
    var icons = document.querySelectorAll('.blog-dropdown .dropdown-btn i');

    dropdownContents.forEach(function (content) {
      content.style.display = 'none';
    });

    icons.forEach(function (icon) {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-chevron-down');
    });
  }
});

// lock = true;

// function displayPopup(item) {
//     if (lock) {
//         lock = false;
//         parent = item.parentElement;
//         parent.style.transform = 'scale(1.5)'
//         parent.style.zIndex = '100'
//         item.setAttribute('onClick', 'hidePopup(this)')
//     }
// }

// function hidePopup(item) {
//     parent = item.parentElement;
//     parent.style.transform = 'scale(1)'
//     parent.style.zIndex = '1'
//     item.setAttribute('onClick', 'displayPopup(this)')
//     lock = true;
// }