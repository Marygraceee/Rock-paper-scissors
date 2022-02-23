let userScore = 0;
let computerScore = 0;




function computerSelection(){
    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);
    
    return option[random];
}


   function playRound(playerChoice, computerChoice){
    playerChoice.toLowerCase();
    computerChoice.toLowerCase();
    if (playerChoice === computerChoice){
        return "This is a tie!"
    }
    if (playerChoice === "paper" && computerChoice === "rock"){
    userScore++;
    return "Player won!"
    }
    if (playerChoice === "rock" && computerChoice === "scissors"){
        userScore++;
        return "Player won!"
    }
    if (playerChoice === "scissors" && computerChoice === "paper"){
        userScore++;
        return "Player won!"
    }
    if (computerChoice === "paper" && playerChoice === "rock"){
        userScore++;
        return "Computer won!"
        }
        if (computerChoice === "rock" && playerChoice === "scissors"){
            userScore++;
            return "Computer won!"
        }
        if (computerChoice === "scissors" && playerChoice === "paper"){
            userScore++;
            return "Computer won!"
        }

        console.log(userScore);
        console.log(computerScore);

}


function game()
{
   for (i=0;i<5;i++)
   {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    let computerChoice = computerSelection();
    console.log("Player picked: " + playerChoice," Computer picked: " + computerChoice);
   console.log(playRound(playerChoice, computerChoice));
    
   }
}

    game()
