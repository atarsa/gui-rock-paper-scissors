const buttons = document.querySelectorAll('button');

const display = document.querySelector('#display');
const displayChoice = document.createElement('h3');

const resultDisplay = document.querySelector('#result');
const roundResult = document.createElement('h3'); 

const scoreDisplay = document.querySelector('#score');
const score = document.createElement('h3');


function computerPlay(){
        let selection = ["rock", "paper", "scissors"];
        let computerSelection = selection[Math.floor(Math.random()*selection.length)];
        return computerSelection;
    }


  

 function playRound(playerSelection, computerSelection){
       
       if (playerSelection === "rock"){
           
            if (computerSelection === "rock"){
                return "draw";
            }
            else if (computerSelection === "paper"){
                return "lose";
            }
            else {
                return "win";
            }
       }
       
       
       if (playerSelection === "scissors"){
           if (computerSelection === "rock"){
                return "lose";
            }
            else if (computerSelection === "paper"){
                return "win";
            }
            else{
                return "draw";
            }
        }
       
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                return "win";
            }
            else if (computerSelection === "paper"){
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
		
		const text = playerSelection + " vs " + computerSelection;
	    
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
        
            roundResult.innerHTML = 'You\'re the winner!';
			resultDisplay.appendChild(roundResult);
			playerWins = 0;
			compWins = 0;
		} else if (compWins == 5){
            roundResult.innerHTML = 'You lost the match!';
			resultDisplay.appendChild(roundResult);
			playerWins = 0;
			compWins = 0;
        }
       
		
	});
});