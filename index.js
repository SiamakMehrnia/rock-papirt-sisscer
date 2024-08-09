const choices = ["rock", "paper", "scissor"];

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// const playerselection = playerChoice();
var playerselection = "paper";
const computerselection = computerChoice();

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     console.log("It's a tie!");
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissor") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissor" && computerSelection === "paper")
//   ) {
//     console.log("You win!");
//   } else {
//     console.log("You lose!");
//   }
// }

function playRound(playerselection, computerselection) {
  if (playerselection === computerselection) {
    console.log("It's a tie!");
  } else if (playerselection === "rock") {
    if (computerselection === "scissor") {
      console.log("Rock smashes scissor, you win!");
    } else if (computerselection === "paper") {
      console.log("Paper covers rock, you lose!");
    }
  } else if (playerselection === "paper") {
    if (computerselection === "rock") {
      console.log("Paper covers rock, you win!");
    } else if (computerselection === "scissor") {
      console.log("Scissor cuts paper, you lose!");
    }
  } else if (playerselection === "scissor") {
    if (computerselection === "paper") {
      console.log("Scissor cuts paper, you win!");
    } else if (computerselection === "rock") {
      console.log("Rock smashes scissor, you lose!");
    }
  }
}

playRound(playerselection, computerselection);
console.log("Player selection: " + playerselection);
console.log("Computer selection: " + computerselection);
