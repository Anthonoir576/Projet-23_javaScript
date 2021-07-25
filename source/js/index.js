// ############ constante variable ####################
const items = document.querySelectorAll('.img');
const nombreDeSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

// ############ fonction  #############################
function slideSuivant () {

    items[count].classList.remove('active');

    // le nombre de slide va de 0 a le nombre d'image, et que le items.length aura toujours un chiffre de plus donc on met -1 pour avoir la valeur en index 0, 1, 2    Donc trois image, si on met pas moins 1, on irra jusqua l'index 3, hors il existe que 3 images dans ce cas la 
    if (count < nombreDeSlide - 1) {

        count++;

    } else {

        count = 0;

    };

    items[count].classList.add('active');

};

function slidePrecedent () {

    items[count].classList.remove('active');

    // le nombre de slide va de 0 a le nombre d'image, et que le items.length aura toujours un chiffre de plus donc on met -1 pour avoir la valeur en index 0, 1, 2    Donc trois image, si on met pas moins 1, on irra jusqua l'index 3, hors il existe que 3 images dans ce cas la 
    if (count > 0) {

        count--;

    } else {

        count = nombreDeSlide - 1;

    };

    items[count].classList.add('active');

};

function byTouch (e) {

    if (e.keyCode === 37) {

        slidePrecedent();

    } else if (e.keyCode === 39) {

        slideSuivant();

    };

};


//############ LISTENER ################################

// listener au click
suivant.addEventListener('click', slideSuivant);
precedent.addEventListener('click', slidePrecedent);

// listener aux touches fleches droite/gauche
document.addEventListener('keydown', byTouch);
