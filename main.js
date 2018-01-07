
    
function computerPlay(){
        let selection = ["rock", "paper", "scissors"];
        let computerSelection = selection[Math.floor(Math.random()*selection.length)];
        return computerSelection;
    }


  

function playRound(playerSelection, computerSelection){
       
       if (playerSelection === "rock"){
           
            if (computerSelection === "rock"){
                return 0;
            }
            else if (computerSelection === "paper"){
                return -1;
            }
            else {
                return 1;
            }
       }
              
       if (playerSelection === "scissors"){
           if (computerSelection === "rock"){
                return -1;
            }
            else if (computerSelection === "paper"){
                return 1;
            }
            else{
                return 0;
            }
        }
       
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                return 1;
            }
            else if (computerSelection === "paper"){
                return 0;
            }
            else{
                return -1;
            }
        }
	
   } 
    
function newGame(){
     playerScore = 0;
     compScore = 0;
	 i = 0;
	
	const buttons = document.querySelectorAll('button');
  	
	buttons.forEach((button) => {
		button.addEventListener('click', (e) =>{
      	let playerSelection = button.id;
			console.log(playerSelection);
			playRound(playerSelection,computerPlay());
      	});
    
  });
	
}
     
let playerScore;
let compScore;
let i;

newGame();