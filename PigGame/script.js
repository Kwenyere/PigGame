'use strict';
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score1 = document.getElementById("score--1");
const score0 = document.getElementById("score--0");
let dice = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
let currentPlayer0 = document.getElementById("current--0");
let currentPlayer1 = document.getElementById("current--1");
score1.innerHTML = 0;
score0.innerHTML = 0;

let scores, currentScore,activeplayer,playing;

const init = () => {
    scores = [0,0];
    currentScore = 0;
    activeplayer = 0;
    playing = true;
    
    score0.innerHTML = 0;
    score1.innerHTML = 0;
    currentPlayer0.innerHTML = 0;
    currentPlayer1.innerHTML = 0;
    
    dice.classList.add("hidden");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player1.classList.add("player-active");
    player0.classList.remove("player-active");
}

init();

const switchPlayer = () => {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

const rollDice = () => {
    const secretDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${secretDice}.png`
    if (secretDice != 1) {
        currentScore += secretDice;
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    }else{
        // switch player
        switchPlayer();
    }
}

btnRollDice.addEventListener("click",rollDice);

btnHold.addEventListener("click",() => {

    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    switchPlayer();

if (scores[activeplayer] >= 100) {
    document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activeplayer}`).classList.remove("player-active");
}
})

btnNew.addEventListener('click', init )