const newGameBtn = document.querySelector("#newGame");
        const playerScoreValue = document.querySelector("#playerScore");
        const comScoreValue = document.querySelector("#comScore");
        const gameContainer = document.querySelectorAll(".container");
        const resultText = document.querySelector("#resultText");
        let comScore = 0;
        let playerScore = 0;
        newGameBtn.addEventListener("click", () => {
            comScore = 0, playerScore = 0;
            playerScoreValue.textContent = playerScore;
            comScoreValue.textContent = comScore;
            resultText.textContent = '';
            gameContainer.forEach(container => {
                container.style.display = "block";
            });
        });


        function getComputerChoice() {
            let choice = Math.floor(1 + Math.random() * 3);
            switch (choice) {
                case 1: return "rock";
                    break;
                case 2: return "paper";
                    break;
                case 3: return "scissors";
            }
        }

        const humanChoiceBtn = document.querySelectorAll(".game.container button");

        humanChoiceBtn.forEach((button) => {
            button.addEventListener("click", () => {
                if (playerScore < 5 && comScore < 5) {
                    playRound(button.id);
                }
            })
        });

        function playRound(humanChoice) {
            let computerChoice = getComputerChoice();

            if (humanChoice == computerChoice) {
                resultText.textContent = "Tie!";
            } else if (computerChoice == "rock" && humanChoice == "paper") {
                playerScore++;
                resultText.textContent = "Player's paper beats Computer's rock";
            } else if (computerChoice == "rock" && humanChoice == "scissors") {
                comScore++;
                resultText.textContent = "Computer's rock beats Player's scissors";
            } else if (computerChoice == "paper" && humanChoice == "rock") {
                comScore++;
                resultText.textContent = "Computer's paper beats Player's rock";
            } else if (computerChoice == "paper" && humanChoice == "scissors") {
                playerScore++;
                resultText.textContent = "Player's scissor beats Computer's paper";
            } else if (computerChoice == "scissors" && humanChoice == "paper") {
                comScore++;
                resultText.textContent = "Computer's scissors beats Player's paper";
            }
            else if (computerChoice == "scissors" && humanChoice == "rock") {
                playerScore++;
                resultText.textContent = "Players's rock beats Computer's scissors";
            }

            playerScoreValue.textContent = playerScore;
            comScoreValue.textContent = comScore;


            if (playerScore === 5 || comScore === 5) {
                endGame();
            } else {
                setTimeout(() => {
                    resultText.textContent = "Make your next move!";
                }, 1000);
            }

        }

        function endGame() {
            if (playerScore > comScore) {
                resultText.textContent = "Congratulations Player wins the game.";
            } else {
                resultText.textContent = "Computer wins!, Better luck next time.";
            }
            setTimeout(() => {
                resultText.textContent = "Press New Game to play again!";
            }, 1000);
        }