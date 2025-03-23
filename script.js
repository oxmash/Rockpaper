let humanscore = 0;
let computerscore = 0;

const score_h = document.querySelector(".HumanScore");
const score_c = document.querySelector(".ComputerScore");

score_h.textContent = `Human Score: ${humanscore}`;
score_c.textContent = `Computer Score: ${computerscore}`;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function getComputerChoice() {
    let mynumber = Math.random();

    if (mynumber >= 0.666) {
        return "rock";
    } else if (mynumber >= 0.3333) {
        return "scissors";
    } else {
        return "paper";
    }
}

// Add event listeners to buttons
rock.addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paper.addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", () => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

// Define the play round function
function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = "Draw";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerscore++;
            result = "You lose";
        } else {
            humanscore++;
            result = "You win";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerscore++;
            result = "You lose";
        } else {
            humanscore++;
            result = "You win";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerscore++;
            result = "You lose";
        } else {
            humanscore++;
            result = "You win";
        }
    }

    // Update the scores after each round
    score_h.textContent = `Human Score: ${humanscore}`;
    score_c.textContent = `Computer Score: ${computerscore}`;

    // Display the result of the round
    alert(`You chose ${humanChoice}. Computer chose ${computerChoice}. Result: ${result}`);
}
