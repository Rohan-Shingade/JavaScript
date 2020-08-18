/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

//1. setup the event handler
document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
         //1. Random Number
    var dice = Math.floor(Math.random() * 6) +  1;

    //2. Display the result // rolling the dice
    //document.querySelector('.dice').style.display = 'block';
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT 1
    if(lastDice === 6 && dice === 6){
        // Player looses Score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    } else if (dice !== 1){
        // Add to scroe
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next Player
        nextPlayer();
        }

    }

    lastDice = dice;
   
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
    
    //1. add current score to global score
    scores[activePlayer] += roundScore;

    //2. update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    
    //3. Check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

        //to hide the dice after winning the game
        document.querySelector('.dice').style.display = 'none';

        //to add winner to the panel & remove actic dot from the winner panel
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');

        gamePlaying = false;
    } else {
        //Next player
        nextPlayer();
        }

    }
        
});

function nextPlayer () {
    // Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //for changing the active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //to hide the dice start 
        document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

//for hide the dice initially    
document.querySelector('.dice').style.display = 'none';
//for setting everything to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//setting players names to default
document.getElementById('name-0').textContent = 'Player-1';
document.getElementById('name-1').textContent = 'Player-2';

//for removing active panel & winner after starting the new game
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

//after starting new game Bydefault Player 1 will be selected.
document.querySelector('.player-0-panel').classList.add('active');
}

