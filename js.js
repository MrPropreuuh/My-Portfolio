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
    if(top >= offset && top < offset + height) {
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

// Ajoutez un écouteur d'événement à chaque carte
cards.forEach(function(card) {
  card.addEventListener('click', function(event) {
    // Récupérez l'ID de la carte cliquée
    const clickedCardId = card.getAttribute('id');

    // Supprimez toutes les classes d'animation des cartes
    cards.forEach(function(card) {
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

    // Effectuez les actions en fonction de l'ID de la carte cliquée
    switch (clickedCardId) {
      case '1':
        // Ajoutez les classes d'animation à la carte 1
        card.classList.add('animation-services-box1');
        document.getElementById('2').classList.add('animation-services-box2');
        document.getElementById('3').classList.add('animation-services-box3');
        document.getElementById('4').classList.add('animation-services-box4');
        break;

      case '2':
        // Ajoutez les classes d'animation à la carte 2
        card.classList.add('animation-services-box5');
        document.getElementById('1').classList.add('animation-services-box6');
        document.getElementById('3').classList.add('animation-services-box7');
        document.getElementById('4').classList.add('animation-services-box8');
        break;

      case '3':
        // Ajoutez les classes d'animation à la carte 3
        card.classList.add('animation-services-box9');
        document.getElementById('1').classList.add('animation-services-box10');
        document.getElementById('2').classList.add('animation-services-box11');
        document.getElementById('4').classList.add('animation-services-box12');
        break;

      case '4':
        // Ajoutez les classes d'animation à la carte 4
        card.classList.add('animation-services-box13');
        document.getElementById('1').classList.add('animation-services-box14');
        document.getElementById('2').classList.add('animation-services-box15');
        document.getElementById('3').classList.add('animation-services-box15');
        break;

      default:
        break;
    }

    event.stopPropagation(); // Arrêtez la propagation de l'événement pour éviter de déclencher l'écouteur d'événement du document
  });
});

// Ajoutez un écouteur d'événement au document pour supprimer les classes d'animation lorsque vous cliquez en dehors des cartes
document.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const isInsideCard = clickedElement.closest('.services-box');
  
  // Si vous cliquez à l'extérieur des cartes
  if (!isInsideCard) {
    // Supprimez toutes les classes d'animation des cartes
    cards.forEach(function(card) {
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
  }
});



