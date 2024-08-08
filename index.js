var choices = ["rock", "paper", "scissor"];

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// var playerselection = playerChoice();
var playerselection = "rock" ;
var computerselection = computerChoice();

function playround(playerselection, computerselection) {
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

playround(playerselection, computerselection);
console.log("Player selection: " + playerselection);
console.log("Computer selection: " + computerselection);
