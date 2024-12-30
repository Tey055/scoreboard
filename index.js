let homeScore = document.getElementById("home-score")
let homePoints = 0

let guestScore = document.getElementById("guest-score")
let guestPoints = 0

let winningTeam = document.getElementById("winning-team-el")

function newGame(){
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}

function onePointHome() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function twoPointHome() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function threePointHome() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function onePointGuest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function twoPointGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function threePointGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}