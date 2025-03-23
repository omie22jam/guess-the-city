const vraag1 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Tokyo",
    b: "Dublin",
    c: "Jakarta",
    d: "Bangkok",
    juisteAntwoord: "c",
    afbeelding: "./images/jakarta.jpeg"
}
console.log(vraag1.vraag)
console.log(vraag1.c)

const vraag2 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Astana",
    b: "Moskou",
    c: "Beijing",
    d: "Jeju",
    juisteAntwoord: "a",
    afbeelding: "./images/astana.jpg"
}
console.log(vraag2.vraag)
console.log(vraag2.a)

const vraag3 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Brasilla",
    b: "Bogota",
    c: "New Mexico",
    d: "Cali",
    juisteAntwoord: "b",
    afbeelding: "./images/bogota.jpeg"
}
console.log(vraag3.vraag)
console.log(vraag3.b)

const vraag4 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Hoi an",
    b: "Tehran",
    c: "Hanoi",
    d: "Manilla",
    juisteAntwoord: "c",
    afbeelding: "./images/hanoi.jpeg"
}
console.log(vraag4.vraag)
console.log(vraag4.c)

const vraag5 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Kralendijk",
    b: "Almere",
    c: "Kaapstad",
    d: "Johannesburg",
    juisteAntwoord: "a",
    afbeelding: "./images/kralendijk.jpeg"
}
console.log(vraag5.vraag)
console.log(vraag5.a)

const vraag6 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Barcelona",
    b: "Marbella",
    c: "Valencia",
    d: "Malaga",
    juisteAntwoord: "d",
    afbeelding: "./images/malaga.jpeg"
}
console.log(vraag6.vraag)
console.log(vraag6.d)

const vraag7 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Rome",
    b: "Bologna",
    c: "Milaan",
    d: "Marseille",
    juisteAntwoord: "c",
    afbeelding: "./images/milaan.jpg"
}
console.log(vraag7.vraag)
console.log(vraag7.c)

const vraag8 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "New Delhi",
    b: "Bisjkek",
    c: "Minsk",
    d: "Reykjavik",
    juisteAntwoord: "d",
    afbeelding: "./images/reyk.jpg"
}
console.log(vraag8.vraag)
console.log(vraag8.d)

const vraag9 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Bern",
    b: "Praag",
    c: "Amsterdam",
    d: "Wenen",
    juisteAntwoord: "b",
    afbeelding: "./images/praag.jpeg"
}
console.log(vraag9.vraag)
console.log(vraag9.b)

const vraag10 = {
    vraag: "Welke stad is hier afgebeeld?",
    a: "Split",
    b: "Zagreb",
    c: "Sarajevo",
    d: "Tirana",
    juisteAntwoord: "a",
    afbeelding: "./images/split.jpeg"
}
console.log(vraag10.vraag);
console.log(vraag10.a);

let vraagNummer = 1;
let score = 0;

const imgElement = document.querySelector("article img");
const h2Spel = document.getElementById("h2Spel");
const h2Score = document.getElementById("h2Score");
const optieA = document.getElementById("optieA");
const optieB = document.getElementById("optieB");
const optieC = document.getElementById("optieC");
const optieD = document.getElementById("optieD");
const skipKnop = document.getElementById("skipKnop");
const correctSound = new Audio("./sounds/correct.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");
const terugKnop = document.getElementById("terugKnop")
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const startKnop = document.getElementById("startKnop");

function laadVraag() {
    let huidigeVraag;

    // chatgpt
    // waarom lukt de if else statement niet? ik wil dat de volgende vraag komt als de eerste is beantwoord.
    if (vraagNummer === 1) huidigeVraag = vraag1;
    else if (vraagNummer === 2) huidigeVraag = vraag2;
    else if (vraagNummer === 3) huidigeVraag = vraag3;
    else if (vraagNummer === 4) huidigeVraag = vraag4;
    else if (vraagNummer === 5) huidigeVraag = vraag5;
    else if (vraagNummer === 6) huidigeVraag = vraag6;
    else if (vraagNummer === 7) huidigeVraag = vraag7;
    else if (vraagNummer === 8) huidigeVraag = vraag8;
    else if (vraagNummer === 9) huidigeVraag = vraag9;
    else if (vraagNummer === 10) huidigeVraag = vraag10;
    else {
        eindSpel();
        return;
    }

    h2Spel.textContent = huidigeVraag.vraag;
    h2Spel.style.color = "darkmagenta";
    imgElement.src = huidigeVraag.afbeelding;

    optieA.textContent = huidigeVraag.a;
    optieB.textContent = huidigeVraag.b;
    optieC.textContent = huidigeVraag.c;
    optieD.textContent = huidigeVraag.d;

    // chatgpt
    // Hoe worden de buttons weer paars als je de volgende vraag gaat?
    // functie-aanroep.
    resetKnoppen();

    optieA.onclick = () => controleerAntwoord("a", huidigeVraag.juisteAntwoord, optieA);
    optieB.onclick = () => controleerAntwoord("b", huidigeVraag.juisteAntwoord, optieB);
    optieC.onclick = () => controleerAntwoord("c", huidigeVraag.juisteAntwoord, optieC);
    optieD.onclick = () => controleerAntwoord("d", huidigeVraag.juisteAntwoord, optieD);
}

// chatgpt sounds
// hoe kan ik een sound toevoegen bij mijn optieknoppen voor het goeie antwoord en de foute antwoorden?
function controleerAntwoord(keuze, juisteAntwoord, knop) {
    if (keuze === juisteAntwoord) {
        knop.style.backgroundColor = "green";
        correctSound.currentTime = 0; 
        correctSound.play(); 
        score++;
        console.log("Correct antwoord!")
    } else {
        knop.style.backgroundColor = "red";
        wrongSound.currentTime = 0;
        wrongSound.play(); 
        console.log("Fout antwoord!")
    }

    h2Score.textContent = "Score: " + score + "/10";

    setTimeout(() => {
        vraagNummer++;
        laadVraag();
    }, 500);
}

function resetKnoppen() {
    optieA.style.backgroundColor = "blueviolet";
    optieB.style.backgroundColor = "blueviolet";
    optieC.style.backgroundColor = "blueviolet";
    optieD.style.backgroundColor = "blueviolet";
}

function eindSpel() {
    let eindScoreElement = document.getElementById("eindScore");
    let boodschap = score >= 7 ? "Gefeliciteerd! Je hebt gewonnen! 🎉" : "Helaas, je hebt verloren. Probeer opnieuw!";

    eindScoreElement.textContent = "Spel afgelopen! Jouw score:" + score + "/10." + boodschap;
    eindScoreElement.style.display = "block";

    document.querySelector("article").style.display = "none";
    document.getElementById("h2Spel").style.display = "none";
    document.getElementById("skipKnop").style.display = "none";
    document.getElementById("terugKnop").style.display = "none"
}

function resetSpel() {
    vraagNummer = 1;
    score = 0;
    document.getElementById("h2Score").textContent = "Score: 0/10";

    setTimeout(() => {
        laadVraag();
    }, 50);
}

skipKnop.addEventListener("click", () => {
    vraagNummer++;
    laadVraag();
})

startKnop.addEventListener("click", function () {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    resetSpel();
})

terugKnop.addEventListener("click", function () {
    gameScreen.style.display = "none";
    startScreen.style.display = "block";
    resetSpel();

})