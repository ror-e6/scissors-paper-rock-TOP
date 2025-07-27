function getComputerChoice(max) {
computerChoice = Math.floor(Math.random() * max);
switch(computerChoice) {
    case 0:
    computerChoice = "Scissors";
    return computerChoice
    case 1:
    computerChoice = "Paper";
    return computerChoice
    case 2:
    computerChoice = "Rock";
    return computerChoice
}

return computerChoice
}

function getHumanChoice() {
let input = prompt("Scissors, Paper or Rock?");
let humanChoice = input.trim().replace(/[^a-z]/gi, "").toLowerCase();
let validChoices = ["rock", "paper", "scissors"];

if (!validChoices.includes(humanChoice)) {
  alert("Invalid input! Please choose Rock, Paper or Scissors.");
  return getHumanChoice();
}
else {
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}
}

function playGame() {
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
        return console.log("Human selects " + humanChoice + " against Computer's " + computerChoice + ". This round ends in a draw!" + " The score is currently: Human " + humanScore + " - " + computerScore + " Computer")
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            console.log("Human selects " + humanChoice + " against Computer's " + computerChoice + ". Human wins this round!" + " The score is currently: Human " + humanScore + " - " + computerScore + " Computer");
        } else {
            computerScore++;
            console.log("Human selects " + humanChoice + " against Computer's " + computerChoice + ". Computer wins this round!" + " The score is currently: Human " + humanScore + " - " + computerScore + " Computer");
        }
    }

for (let round = 1; round <= 5; round++) {
    let human = getHumanChoice();      
    let computer = getComputerChoice(3);
    playRound(human, computer);
    }

    if (humanScore > computerScore) {
        return "Final Score: Human " + humanScore + " - " + computerScore + " Computer. Human wins the game!"
    }
    else if (computerScore > humanScore) {
        return "Final Score: Human " + humanScore + " - " + computerScore + " Computer. Computer wins the game!"
    }
    else {
        return "The game has ended in a draw."
    }
}

console.log(playGame());