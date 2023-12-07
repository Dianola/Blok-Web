// JavaScript Document



console.log("hi VUE visitor");

/////////////////////////////////////
///// Open Hamburger menu //////////
///bron: Sanne (docent HvA)/////////

var openButton = document.querySelector("header > button");

if (openButton) {
  // //  laat de menu-button luisteren naar kliks en voer dan een functie uit
    openButton.onclick = openMenu;

// //in de functie een class toevoegen aan de nav
    function openMenu() {
      // zoek de nav op
        var theNav = document.querySelector("nav");
        if (theNav) {   
          // voeg class toe aan nav                                  
            theNav.classList.add("toonMenu");
        }
    }
} else {  //als de nav niet gevonden wordt
    console.error("Open button not found!");
}

// //////////////////////////////////////////
// // menu sluiten met de sluit button ///
// ////////////////////////////////////////

// //zoek 'sluiten button' op
var closeButton = document.querySelector("nav button");

if (closeButton) {
  // // laat die button luisteren naar kliks
    closeButton.onclick = closeNav;

    // // in de functie verwijder de class van de nav
    function closeNav() {
        var theNav = document.querySelector("nav");
        if (theNav) {
            theNav.classList.remove("toonMenu");
        }
    }
} else {
    console.error("Closing button not found!");
}




// ////////////////////////////////
// /// Klik dag/ films ordering pagina//////      bron: https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
// //////////////////////////////////////

// selecteerd het uiterlijk van de geselecteerde knop te wijzigen in de tweede sectie van de hoofdinhoud
var buttonsInSection = document.querySelectorAll("main section:nth-of-type(2) button");

// Haal de knop op aan de hand van zijn locatie en stel deze standaard in als geselecteerd
var orderMovieButton = document.querySelector("main section:nth-of-type(2) button:nth-of-type(2)");

// Loop door elke knop in de tweede sectie en voegt een klikgebeurtenis toe
if (orderMovieButton) {
    orderMovieButton.classList.add("selected");

    buttonsInSection.forEach(function (button) {
        button.addEventListener("click", function () {
          // Controleer of de knop al de "selected" klasse heeft
            if (this.classList.contains("selected")) {
              // Als dat zo is, verwijder dan de "selected"
                this.classList.remove("selected");  
            } else {
              // Als dat niet zo is, verwijder dan de "selected" klasse van alle knoppen in de sectie
                buttonsInSection.forEach(function (btn) {
                    btn.classList.remove("selected");
                });
                // Voeg de "selected" klasse toe aan de geklikte knop
                this.classList.add("selected");
            }
        });
    });
} else {
    console.error("Per film button not found!");
}



/////////////////////////////////////////
/////////////// Stoelenkaart ////////////
////Bron Donna Stam//////////////////////


// Selecteer de stoelmap-container
const seatMapContainer = document.querySelector('.ticket main>section:nth-of-type(1) section');

// Afbeeldingsbron voor de vrije stoel
const freeSeatImageSrc = './images/stoel-normaal.svg';

// Genereer de stoelmap
const totalRows = 9;
const seatsPerRow = 10;


if (seatMapContainer) {
    for (let row = 1; row <= totalRows; row++) {
        for (let seat = 1; seat <= seatsPerRow; seat++) {
            const seatImage = document.createElement('img');
            seatImage.src = freeSeatImageSrc;
            seatImage.alt = `rij: ${row}, stoel: ${seat}`;

            // Voeg de stoelafbeelding toe aan de stoelmap-container
            seatMapContainer.appendChild(seatImage);
        }
    }
} else {
    console.error("Seat map container not found!");
}