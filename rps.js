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
humanChoice = prompt("Scissors, Paper or Rock?");
return humanChoice;
}

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
playRound(humanChoice, computerChoice)
}

console.log(getComputerChoice(3))
console.log(getHumanChoice())
playGame()