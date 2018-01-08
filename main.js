var buttons = document.querySelectorAll('button');
    
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
/*
const rock = document.querySelector('#rock');
rock.addEventListener('click', function(e){
	
	playerSelection = rock.id;
	computerSelection = computerPlay();
	
	const display = document.querySelector('#display')
	const displayChoice = document.createElement('div');
	
	const text = playerSelection + " vs " + computerSelection;
	displayChoice.textContent = text;
	
	display.appendChild(displayChoice);
	let result = playRound(playerSelection, computerSelection);
	console.log(result);
	return result;
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(e){
	
	playerSelection = paper.id;
	computerSelection = computerPlay();
	
	const display = document.querySelector('#display')
	const displayChoice = document.createElement('div');
	
	const text = playerSelection + " vs " + computerSelection;
	displayChoice.textContent = text;
	
	display.appendChild(displayChoice);
	let result = playRound(playerSelection, computerSelection);
	console.log(result);
	return result;
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(e){
	
	playerSelection = scissors.id;
	computerSelection = computerPlay();
	
	const display = document.querySelector('#display')
	const displayChoice = document.createElement('div');
	
	const text = playerSelection + " vs " + computerSelection;
	displayChoice.textContent = text;
	
	display.appendChild(displayChoice);
	let result = playRound(playerSelection, computerSelection);
	console.log(result);
	return result;
});
*/


            
                
var playerWins = 0;
var compWins = 0;
var result = [];
     
        
         
buttons.forEach((button) => {
	button.addEventListener("click", function(){
		var computerSelection = computerPlay();
		var playerSelection = button.id;
		result = playRound(playerSelection,computerSelection);
		
		if (result === "win"){
                playerWins++;
                console.log(" ");
                console.log("You win, "+ playerSelection + " beats " + computerSelection + ".");
            } else if (result === "lose"){
                compWins++;
                console.log(" ");
                console.log("You lose, "+ computerSelection + " beats " + playerSelection + ".");
            } else{
                console.log(" ");
                console.log("It's a draw.")
            }
            
        if (playerWins >= 5){        
        
            console.log("The result is: " + playerWins + " : " + compWins +". You're the winner!")
		} else if (compWins >= 5){
            console.log(" ");
            console.log("The result is: " + playerWins + " : " + compWins +". You lost!");
        }
       
		
	});
});