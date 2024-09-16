let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    switch (randomChoice) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice for rock paper scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore += 1;
        return "You win this round!";
    } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "scissors")) {
        computerScore += 1;
        return "The computer wins this round!";
    } else if (humanChoice == computerChoice) {
        return "You tied! Go again.";
    } else {
        return "Wrong input. Try again and check spelling.";
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) {
        return "Game has ended and you won! Your score was " + humanScore + ", and the computer's score was " + computerScore;
    } else if (humanScore < computerScore) {
        return "Game has ended and you lost! Your score was " + humanScore + ", and the computer's score was " + computerScore;
    } else {
        return "Game has ended and you tied! Your score was " + humanScore + ", and the computer's score was " + computerScore;
    }
}

console.log(playGame());
