
let roundCounter = 0;
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
let currentRound;

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return options[randNum];
};

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
};

        function playRound() {
            let computerChoice = getComputerChoice();
                if (
                    (humanChoice == "Rock" && computerChoice == "Scissors") ||
                    (humanChoice == "Paper" && computerChoice == "Rock") ||
                    (humanChoice == "Scissors" && computerChoice == "Paper")
                ) {
                    humanScore += 1;
                    currentRound = (humanChoice + " vs " + computerChoice + ", you win!")
                } else if (humanChoice === computerChoice) {
                    currentRound = (humanChoice + " vs " + computerChoice + ", it's a tie!")
                } else {
                    computerScore += 1;
                    currentRound = (humanChoice + " vs " + computerChoice + ", you lose!")
                };
            
            const roundScore = document.querySelector(".roundscore");
            roundScore.textContent = currentRound;
            console.log("HUMAN:", humanChoice);
            console.log("COMPUTER:", computerChoice);
            console.log("SCORE - Human:", humanScore, "| Computer:", computerScore);

            const userScoreDiv = document.querySelector(".userscore");
            userScoreDiv.textContent = ("Player score: " + humanScore);
            const compScoreDiv = document.querySelector(".compscore");
            compScoreDiv.textContent = ("Computer score: " + computerScore);

            const score = document.querySelector(".finalscore");
            const resetBtn = document.querySelector('#reset');

            resetBtn.addEventListener('click', () => {
                window.location.reload();
        });

        if (roundCounter < 4) {
            roundCounter += 1;
        } else {
                if (humanScore > computerScore) {
                score.textContent = "You are the winner!"
            } else if (humanScore === computerScore) {
                score.textContent = "It's a draw!"
            } else {
                score.textContent = "You lost!"
            } 
                disableButtons();
                resetBtn.removeAttribute("hidden");
        };

    };

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    humanChoice = "Rock";
    playRound();
});

paper.addEventListener('click', () => {
    humanChoice = "Paper";
    playRound();
});

scissors.addEventListener('click', () => {
    humanChoice = "Scissors";
    playRound();
});     