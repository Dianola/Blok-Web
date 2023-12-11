
// /////////////////////////////////////
// ///// Open Hamburger menu //////////
// ///bron: Sanne (docent HvA)/////////

var openButton = document.querySelector("header > button");
var closeButton = document.querySelector("nav button"); //zoek 'sluiten button' op

function openMenu() { //in de functie een class toevoegen aan de nav
    var theNav = document.querySelector("nav");
    if (theNav) {   
        theNav.classList.add("toonMenu");
    } else {
        console.log("Nav not found!");
    }
}

function closeNav() {
    var theNav = document.querySelector("nav");
    if (theNav) {
        theNav.classList.remove("toonMenu");    
    } else {
        console.log("Nav not found!");
    }
}

if (openButton) { //  laat de menu-button luisteren naar kliks en voer dan een functie uit
    openButton.onclick = openMenu;
} else {
    console.log("Open button not found!");
}

if (closeButton) {  // in de functie verwijder de class van de nav
    closeButton.onclick = closeNav;
} else {
    console.log("Close button not found!");
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


////////////////////////////
///snowflake animation////
////bron: https://www.youtube.com/watch?v=H_7Ld5Psgg0/////

// Selecteer alle SVG-path-elementen op de pagina
let paths = document.querySelectorAll('path');

// Roep de functie fillSvgPath aan om de SVG-paden in te stellen bij het laden van de pagina
fillSvgPath();

// Voeg een event listener toe voor het scrollen van de pagina om de functie fillSvgPath uit te voeren
document.addEventListener('scroll', fillSvgPath);

function makeSnowflake() {
    // Bereken het percentage van het scrollen ten opzichte van de totale scrolllengte van de pagina
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    // Loop: door alle SVG-paden op de pagina
    for (var i = 0; i < paths.length; i++) {
        let path = paths[i];        
        
        let pathLength = path.getTotalLength();           // Bereken de lengte van het huidige pad
        path.style.strokeDasharray = pathLength;                // Stel de eigenschappen in voor het animatie-effect van de lijn van het pad
        path.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage;         // Bereken hoeveel van het pad moet worden weergegeven op basis van het scrollpercentage
        path.style.strokeDashoffset = pathLength - drawLength;  // Stel de eigenschap in om de tekenlengte van het pad aan te passen
    }
}

// Functie die controleert of de makeSnowflake-functie moet worden aangeroepen op basis van de scrollpositie
function fillSvgPath() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Controleer of de scrollpositie groter is dan 1 om makeSnowflake aan te roepen
    if (scrollPosition > 1) { 
        makeSnowflake();
    } else {
        console.log('no snowflake needed');
    }
}
