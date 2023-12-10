
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
let paths = document.querySelectorAll('path');

fillSvgPath();

document.addEventListener('scroll', fillSvgPath);

function makeSnowflake() {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    for (var i = 0; i < paths.length; i++) {
        let path = paths[i];
        
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
    }
}

function fillSvgPath() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Check the scroll position to determine if the makeSnowflake function should be executed
    if (scrollPosition > 1) { // Change 500 to the desired scroll position where you want makeSnowflake() to execute
        makeSnowflake();
    } else {
        console.log('no snowflake needed');
    }
}
