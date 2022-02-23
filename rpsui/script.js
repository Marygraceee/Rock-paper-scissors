/*
    let userScore = 0;
    let computerScore = 0;



    function computerSelection(){
    const cOption = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return cOption[random];
}

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

  */

const options = document.querySelectorAll(".options");
let userScore = 0;
let computerScore = 0;


options.forEach((option) => {
option.addEventListener("click", function (e)  {
    let pChoice = e.target.textContent;
    let cArray = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * 3);
    let cChoice = cArray[random];
    
   if (pChoice === cChoice)
   {
    alert("This is a tie!")
   } 
   //Player wins//
   if (pChoice === "Paper" && cChoice === "Rock"){
       userScore++;
       alert("Player wins!")
   }
   else if (pChoice === "Scissors" && cChoice === "Paper"){
    userScore++;
       alert("Player wins!")
   }
   else if (pChoice === "Rock" && cChoice === "Scissors"){
    userScore++;
       alert(`Player wins!`)
   }
   //Computer wins//
   if (cChoice === "Paper" && pChoice === "Rock"){
       computerScore++;
    alert(`Computer wins!`)
}
else if (cChoice === "Scissors" && pChoice === "Paper"){
    computerScore++;
    alert(`Computer wins!`)
}
else if (cChoice === "Rock" && pChoice === "Scissors"){
    computerScore++;
    alert(`Computer wins!`)
}

if (userScore === 5 && computerScore < 5){
    alert("Game ended! Player won!")
    userScore = 0;
    computerScore = 0;
} else if (userScore < 5 && computerScore === 5) {
alert("Game ended! Computer won!")
userScore = 0;
computerScore = 0;
}


document.getElementById("userscore2").innerHTML = `User score is: ${userScore}`
document.getElementById("computerscore2").innerHTML =  `Computer score is: ${computerScore}`

});
});






