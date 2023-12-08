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


/////////////////////////////////////////
/////////////// Kerst thema ////////////
////Bron sanne (heb de nav code gebruikt)//////////////////////

var christmasTheme = document.querySelector("main>section:nth-of-type(1)>button");

if (christmasTheme) {
    // voegt click event listner toe op de button
    christmasTheme.addEventListener("click", iWantChristmas);
}

function iWantChristmas() {
    var theChristmasBody = document.querySelector("body");
    if (theChristmasBody) {
        // checkt of de class 'christmas' er is 
        var isChristmas = theChristmasBody.classList.contains("christmas");
        
        if (isChristmas) {
            // If 'christmas' class aanwezig is, verwijder deze
            theChristmasBody.classList.remove("christmas");
        } else {
            // If 'christmas' class niet aanwezig is, voeg toe
            theChristmasBody.classList.add("christmas");
        }
    }
}

