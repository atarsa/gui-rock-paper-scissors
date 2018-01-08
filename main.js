const buttons = document.querySelectorAll('button');

const display = document.querySelector('#display');
const displayChoice = document.createElement('h3');

const resultDisplay = document.querySelector('#result');
const roundResult = document.createElement('h2'); 

const scoreDisplay = document.querySelector('#score');
const score = document.createElement('h3');


function computerPlay(){
        let selection = ["Rock", "Paper", "Scissors"];
        let computerSelection = selection[Math.floor(Math.random()*selection.length)];
        return computerSelection;
    }

 
 function playRound(playerSelection, computerSelection){
       
       if (playerSelection === "Rock"){
           
            if (computerSelection === "Rock"){
                return "draw";
            }
            else if (computerSelection === "Paper"){
                return "lose";
            }
            else {
                return "win";
            }
       }
       
       
       if (playerSelection === "Scissors"){
           if (computerSelection === "Rock"){
                return "lose";
            }
            else if (computerSelection === "Paper"){
                return "win";
            }
            else{
                return "draw";
            }
        }
       
        if (playerSelection === "Paper"){
            if (computerSelection === "Rock"){
                return "win";
            }
            else if (computerSelection === "Paper"){
                return "draw";
            }
            else{
                return "lose";
            }
        }
 } 

               
var playerWins = 0;
var compWins = 0;
var result = [];
     
      
         
buttons.forEach((button) => {
	button.addEventListener("click", function(){
		var computerSelection = computerPlay();
		var playerSelection = button.id;
		
		const text = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase();
	    
		displayChoice.textContent = text;
	    display.appendChild(displayChoice);
		
		result = playRound(playerSelection,computerSelection);
		
		if (result === "win"){
        	playerWins++;
			roundResult.innerHTML = 'You win this round!';
			resultDisplay.appendChild(roundResult);
			score.innerHTML = playerWins + " : " + compWins;
			scoreDisplay.appendChild(score);
               
        } else if (result === "lose"){
        	compWins++;
            roundResult.innerHTML = 'You lost this round!';
			resultDisplay.appendChild(roundResult);
			score.innerHTML = playerWins + " : " + compWins;
			scoreDisplay.appendChild(score);
        } else{
            roundResult.innerHTML = 'It\'s a draw!';
			resultDisplay.appendChild(roundResult);
			score.innerHTML = playerWins + " : " + compWins;
			scoreDisplay.appendChild(score);
            }
            
        if (playerWins == 5){        
        
            roundResult.innerHTML = 'The game is over. You\'re the winner! :\)';
			resultDisplay.appendChild(roundResult);
			playerWins = 0;
			compWins = 0;
		} else if (compWins == 5){
            roundResult.innerHTML = 'Game Over. You lost the match!';
			resultDisplay.appendChild(roundResult);
			playerWins = 0;
			compWins = 0;
        }
       
		
	});
});