
    
function computerPlay(){
        let selection = ["rock", "paper", "scissors"];
        let computerSelection = selection[Math.floor(Math.random()*selection.length)];
        return computerSelection;
    }


  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
      let playerSelection = button.id;
      console.log(playerSelection);
      playRound(playerSelection,computerPlay());
      });
    
  });

function playRound(playerSelection, computerSelection){
       let result;      
       
       if (playerSelection === "rock"){
           
            if (computerSelection === "rock"){
                result = 
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
    
function game(){
            
                
        let playerWins = 0;
        let compWins = 0;
        
            let round = playRound(playerSelection,computerSelection);
            
            if (round === "win"){
                playerWins++;
                console.log(" ");
                console.log("You win, "+ playerSelection + " beats " + computerSelection + ".");
            } else if (round === "lose"){
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
