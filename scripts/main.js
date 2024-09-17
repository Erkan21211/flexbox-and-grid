// javascript vraag opdracht:
// Wat is het verschil tussen een looselytyped languageen een strong typedlanguage?
// antwoord: bij looselytyped kan variables veranderen van type en bij strong typed niet.

// how to turn on strong typed javascript on?
// antwoord: dan moet we typescript gebruiken.

// onderzoek:
// ik heb onderzocht hoe ik de datum kan laten zien aan de gebruiker. bron: https://www.shecodes.io/athena/6172-how-to-get-current-date-in-javascript#:~:text=You%20can%20use%20the%20Date,use%20the%20toDateString()%20method.



console.log("Dit is een pagina");


// variables 
const currentDate = new Date().toDateString();
let contentText = document.getElementById("contentText");
let menuhomeText = document.getElementById("menu-home-text");


// pagina text aanpassen
document.getElementById("datum").innerText = currentDate;
contentText.innerText = "Mijn pagina";
menuhomeText.innerText = "Thuis";

// datatypes
let number = 100;
let color = "Red";
let isRed = true;
// objects
const persoon = {
    voornaam: "Erkan",
    achternaam: "Aslantas"
}
// Array list
const autos = ['BMW', "VOLVO", "NISSAN"];
const datum = new Date("2024-9-17")

const sportLijst = ["voetbal", "hockey", "tennis"]

const modules = {
    onderzoeksvaardigheden: "Jan Zuur, Ron van Zuilichem",
    professionalskills: "Arie Ismaiel, Wout de Folter",
    webdevelopment: "Stephan Hoeksema"
}


// if else statements sport edition

if(sportLijst.includes("voetbal")) {
    console.log("dat is een leuke sport")
} else {
    console.log("minder leuke sport");
}


// switch methode van if statement
switch(modules) {
    case modules.onderzoeksvaardigheden:
        console.log("leuk vak!");
    case modules.professionalskills:
        console.log("goed vak!");
    case modules.webdevelopment:
        console.log("web development is leuke vak")
    default:
        console.log("dit vak herken ik niet")
}

let studentengegevens = [
    { naam: "Erkan", cijfers: { NL: 8, ENG: 8, webdev: 10 } },
    { naam: "Anna", cijfers: { NL: 2, ENG: 8, webdev: 6 } },
    { naam: "Mike", cijfers: { NL: 5, ENG: 8, webdev: 10 } },
    { naam: "Eric", cijfers: { NL: 8, ENG: 8, webdev: 5 } },
    { naam: "Jos", cijfers: { NL: 4, ENG: 5, webdev: 10 } }
];

for (const student of studentengegevens) {
    console.log("Naam: " + student.naam);
    console.log("Cijfers: " + JSON.stringify(student.cijfers));
    console.log("gemiddelde cijfer opdracht:");
    

    // gemiddelde opdracht
    let cijfers = Object.values(student.cijfers); // Haal alle cijfers op
    let totaal = cijfers.reduce((acc, cijfer) => acc + cijfer, 0); // Bereken de som van de cijfers
    let gemiddelde = totaal / cijfers.length; // Bereken het gemiddelde

    console.log("Naam: " + student.naam);
    console.log("Gemiddelde cijfer: " + gemiddelde.toFixed(2));


    // hoogste gemiddelde
    console.log("Naam: " + student.naam);
    console.log("Gemiddelde cijfer: " + gemiddelde.toFixed(2));
    console.log("hoogste gemiddelde:" + Math.max(gemiddelde));
    console.log("vakken:" + modules.onderzoeksvaardigheden);
    console.log("vakken:" + modules.professionalskills);
    console.log("vakken:" + modules.webdevelopment);
}


// functies

let elementoppervlakte = document.getElementById('oppervlakteText');
let oppervlakteNumber = document.getElementById('oppervlakteText').value;

function berekenOppervlakte(breedte, hoogte) {
    
    console.log(breedte + "x" + hoogte);
    return breedte * hoogte;
}

let oppervlakte = berekenOppervlakte(5, 10);

function checkKleurOppervlakte() {
    if(oppervlakte < 50) {
        elementoppervlakte.style.color = "red";
        elementoppervlakte.innerText = oppervlakte;
    } else if (oppervlakte < 100) {
        elementoppervlakte.style.color = "green";
        elementoppervlakte.innerText = oppervlakte;
    } else {
        elementoppervlakte.style.color = "yellow";
        elementoppervlakte.innerText = oppervlakte;
    }
    console.log(oppervlakte);
}

checkKleurOppervlakte();

// Maak een functie die een eendimensionale array omzet
// in een string. Let op, hiervoor zijn verschillende mogelijkheden. Toon minimaal twee.

let array1 = [1, 2, 3, 4, 10];

function methode1(array1) {
    let text = array1.toString();
    console.log(text);
}

// methode1(array1);



// join 
function methode2(array1) {
    return console.log(array1.join(""));
}
methode1(array1);
methode2(array1)
