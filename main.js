
    
function computerPlay(){
        let selection = ["rock", "paper", "scissors"];
        let computerSelection = selection[Math.floor(Math.random()*selection.length)];
        return computerSelection;
    }


  

 function playRound(playerSelection, computerSelection){
       let result;
       if (playerSelection === "rock"){
           
            if (computerSelection === "rock"){
                result = "draw";
            }
            else if (computerSelection === "paper"){
                result =  "lose";
            }
            else {
                result =  "win";
            }
       }
       
       
       if (playerSelection === "scissors"){
           if (computerSelection === "rock"){
                result =  "lose";
            }
            else if (computerSelection === "paper"){
                result =  "win";
            }
            else{
                result =  "draw";
            }
        }
       
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                result =  "win";
            }
            else if (computerSelection === "paper"){
                result =  "draw";
            }
            else{
                result =  "lose";
            }
        }
	 return result;
   } 
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
});



let playerSelection;

function game(){
            
                
        let playerWins = 0;
        let compWins = 0;
     
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
            
                
        if (playerWins > compWins){
            console.log(" ");
            console.log("The result is: " + playerWins + " : " + compWins +". You're the winner!")
        } else if (playerWins < compWins){
            console.log(" ");
            console.log("The result is: " + playerWins + " : " + compWins +". You lost!");
        }
        else{
            console.log(" ");
            console.log("The result is: " + playerWins + " : " + compWins +". It'a a tie!");
        }
         
}