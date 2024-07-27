"use strict"

const score0E1 = document.querySelector('#score_0');
const score1E1 = document.querySelector('#score_1');
const diceE1 = document.querySelector('.dice');
const playerO = document.querySelector('.player_0');
const player1 = document.querySelector('.player_1');
const btnHold = document.querySelector('.btn_hold');

let btnRoll = document.querySelector('.btn_roll');

score0E1.textContent = 0;
score1E1.textContent = 0;

let activeplayer = 0;
let currentScore = 0;
let scores = [0, 0]
let playGame = true;
btnRoll.addEventListener('click', function () {
    if (playGame) {

        diceE1.classList.remove('hidden')
        //generate the random number
        // score0E1 = 0;
        // function switchPlayer() {
        //     document.getElementById(`current_${activeplayer}`).textContent = 0;
        //     activeplayer = activeplayer === 0 ? 1 : 0;
        //     currentScore = 0;
        //     playerO.classList.toggle('player_active')
        //     player1.classList.toggle('player_active')
        // }
        const dice = Math.floor(Math.random() * 6) + 1;
        const dicePng = document.querySelector('.dice');


        dicePng.src = `assets/images/${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current_${activeplayer}`).textContent = currentScore;
        } else {
            document.getElementById(`current_${activeplayer}`).textContent = 0;
            activeplayer = activeplayer === 0 ? 1 : 0;
            currentScore = 0;
            playerO.classList.toggle('player_active')
            player1.classList.toggle('player_active')
        }
        console.log(activeplayer)
    }


})

btnHold.addEventListener('click', function () {
    if (playGame) {
        // activeplayer = activeplayer != activeplayer;
        scores[activeplayer] += currentScore;
        console.log(scores)
        document.getElementById(`score_${activeplayer}`).textContent = scores[activeplayer]
        if (scores[activeplayer] >= 20) {

            document.querySelector(`.player_${activeplayer}`).classList.add('player-winner')
            diceE1.classList.add('none');
            playGame = false;
        } else {
            document.getElementById(`current_${activeplayer}`).textContent = 0;
            activeplayer = activeplayer === 0 ? 1 : 0;
            currentScore = 0;
            playerO.classList.toggle('player_active')
            player1.classList.toggle('player_active')
        }

    }
})
function reload(){
    location.reload();
}
