let add1Home = document.getElementById("add1-home");
let add2Home = document.getElementById("add2-home");
let add3Home = document.getElementById("add3-home");

let add1Guest = document.getElementById("add1-guest");
let add2Guest= document.getElementById("add2-guest");
let add3Guest= document.getElementById("add3-guest");

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let resetBtn = document.getElementById("reset-btn");
let homeCount = 0;
let guestCount = 0;

function add1Hom() {
    homeCount++;
    homeScore.textContent = homeCount;
}

function add2Hom() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function add3Hom() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function add1Gues() {
    guestCount++;
    guestScore.textContent = guestCount;
}
function add2Gues() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}
function add3Gues() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function resetScore() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}