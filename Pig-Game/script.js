'use strict';
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let score, currentscore, activeplayer, playing;

const init = function(){

     score = [0,0];
     currentscore = 0;
     activeplayer = 0;
     playing = true;

    score0el.textContent = 0;
    score1el.textContent = 0;
    current0el.textContent = 0;
    current1el.textContent = 0;
     
    diceel.classList.add('hidden');
    player0el.classList.remove('playyer--winner');
    player1el.classList.remove('player--winner');
    player0el.classList.add('player--active');
    player1el.classList.remove('player--active');
}
init();
const switchplayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0; 
        currentscore = 0;
        activeplayer = activeplayer === 0 ? 1 : 0; 
        player0el.classList.toggle('player--active');
        player1el.classList.toggle('player--active');
}

btnroll.addEventListener('click',function(){
    if(playing){
 
    // 1. generate a random rice roll
        const dice = Math.trunc(Math.random()* 6) + 1;
        console.log(dice);

    // 2. display dice
        diceel.classList.remove('hidden');
        diceel.src= `dice-${dice}.png`;

    // 3. check dice is 1: if true switch to the next player

    // check if rolled 1
    if(dice !== 1){
        // add dice the current score
        currentscore += dice;
        document.getElementById(`current--${activeplayer}`).textContent = currentscore; 
    }
    else{
        // switch to the next player
        switchplayer();

    }
}
})

btnhold.addEventListener('click',function(){
    // add current score to active player's score
    if(playing){

   
    score[activeplayer] += currentscore;
    // score[1] = score[1] + currentscore 
    // console.log(score[activeplayer])

    document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];

    // check the player score is >= 100
    if(score[activeplayer] >= 100 ){
        playing = false;
        diceel.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');

    } 
    // finish the game


    // switch to next player
    switchplayer();
}
})

btnnew.addEventListener('click',init)