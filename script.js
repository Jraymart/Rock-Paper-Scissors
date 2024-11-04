//Create a rock paper scissors game through console

//The game will be played against a computer
//Write a function that randomly returns rock, paper, or scissors
function getComputerChoice(){
    let choice = Math.floor(1 + Math.random()*3);
    switch(choice){
        case 1: return "rock";
        break;
        case 2: return "paper";
        break;
        case 3: return "scissors";
    }
}

//write a function that will get user choice
function getHumanChoice(){
    let isValid = false;
    let playerChoice;

    while(!isValid){
        playerChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        switch (playerChoice){
            case 'rock':
            case 'paper':
            case 'scissors':
                isValid = true;
                break;
            default:
                console.log("That is not a valid input! Try again.")
        }
    }
    return playerChoice;
}

//declare the players score variables

let comScore = 0;
let playerScore = 0;

//write the logic to play a single round;
function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().toLowerCase();

    console.log("The Computer chose: " + computerChoice);
    console.log("The Player chose: " + humanChoice);

    if (humanChoice == computerChoice){
        console.log("Tie!");
    }else if (computerChoice == "rock" && humanChoice == "paper"){
        playerScore++;
        console.log("Paper beats Rock!");
    }else if (computerChoice == "rock" && humanChoice == "scissors"){
        comScore++;
        console.log("Rock beats Scissors!");
    }else if (computerChoice == "paper" && humanChoice == "rock"){
        comScore++;
        console.log("Paper beats Rock!");
    }else if (computerChoice == "paper" && humanChoice == "scissors"){
        playerScore++;
        console.log("Scissors beats Paper!");
    }else if (computerChoice == "scissors" && humanChoice == "paper"){
        comScore++;
        console.log("Scissors beats Paper!");
    }
    else if (computerChoice == "scissors" && humanChoice == "rock"){
        playerScore++;
        console.log("Rock beats Scissors!");
    }

    let scoreBoard = "Player:" + playerScore + " Computer: " + comScore;
    console.log(scoreBoard);
}

//write a function that plays 5 rounds of rock paper scissors
function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
    }

    if(playerScore > comScore){
        console.log("Player Wins!");
    }
    else if(playerScore === comScore){
        console.log("Tie Game");
    }
    else{
        console.log("Computer Wins!");
    }
}