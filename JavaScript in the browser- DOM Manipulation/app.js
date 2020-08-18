/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*===============================================
39. First DOM Access and Manipulation
================================================*/

var scores, roundScore, activePlayer, gamePlaying;

init();


/*=======================================================================
math.random will be provide ramdom number
and math.floor function removes decimal part off given number.
for eg.:
math.random()
> 4.02482759
but if I write
math.floor(math.random() * 6) //(*6) will give numbers between 1 to 6
>4
=======================================================================*/

//dice = Math.floor(Math.random() * 6) +  1 ; 

//we say it as "setter" here we are setting a value
//document.querySelector('#current-' + activePlayer).textContent = dice;    //textContent changes text in particular selected element

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//the other way of using querySelector.
// we also say it as "getter", because we get value
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//we have comment this & 4 document lines of having value 0 in lecture 43 while creating a function init
//document.querySelector('.dice').style.display = 'none';

/*===================================================
40. Events & Event Handling : Rolling the dice
====================================================*/
/*
"Event": Notifications are sent to notify the code that something happened on the web page.
e.g.: clicking a button, resizing a window, scrolling doen or pressing a key

"Event Listner": A function that performs an action based on certain event. it waits for speicific events to happen.
*/
//after anononynous funtion in addEventtListner setting all values to 0

//document.getElementById('score-0').textContent = 0;
//document.getElementById('score-1').textContent = 0;
//document.getElementById('current-0').textContent = 0;
//document.getElementById('current-1').textContent = 0;



//1. setup the event handler
document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
         //1. Random Number
    var dice = Math.floor(Math.random() * 6) +  1 ;

    //2. Display the result // rolling the dice
    //document.querySelector('.dice').style.display = 'block';
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT 1
/*=====================================================
41. Updating the scores & changing the active players
=======================================================*/
    if (dice !== 1){
        //add to scroe
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next players turn

        //we will also see that how to use "Turnary operator"
        /*activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     //   /same as writing
     //   if (activePlayer === 0){
     //       activePlayer = 1;
     //   } else {
     //       activePlayer = 0;
     //   }

        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active'); 
        
        //for changing the active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //to hide the dice start 
        document.querySelector('.dice').style.display = 'none';*/

        // Insted of writing above code  we created a function with same code & we are going to call that function
        nextPlayer();
        }

    }

   
});

/*========================================================
42. Implementing our 'Hold' Function and dry the priciple
==========================================================*/
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
    /*same as writing
        if (activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }*/

    roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active'); 
        
        //for changing the active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //to hide the dice start 
        document.querySelector('.dice').style.display = 'none';

}

/*========================================================
43. Creating a Game Initialization function
==========================================================*/

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

/*========================================================
44. Finishing touches _ State Variables
==========================================================*/
//adding the state variable called "gamePlaying" to check that after game should be stopped.