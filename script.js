document.addEventListener('DOMContentLoaded', function() {

    //setup
    let choices = ["rock","paper","scissors"];
    let resultElement = document.getElementById("result");

    let numberPlays = 0;
    let numberWins = 0;

    document.getElementById("rock").addEventListener("click", function() {
        determineWinner("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        determineWinner("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
        determineWinner("scissors");
    });

    function determineWinner(userChoice) {
        numberPlays++;
        //alert(userChoice);
        let randomChoice = Math.floor(Math.random() * choices.length);
        let computerChoice = choices[randomChoice];
        //alert(computerChoice);

        if (userChoice === computerChoice) {
            //alert("it's a tie");
            resultElement.innerHTML = "You both played " + userChoice + ". It's a tie. Number of plays: " + numberPlays + ", number of wins: " + numberWins;
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") || 
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            //alert("User wins!!!");
            numberWins++;
            resultElement.innerHTML = "You played " + userChoice + ", computer played " + computerChoice + ", you win! Number of plays: " + numberPlays + ", number of wins: " + numberWins;
        } else {
            //alert("Computer wins.");
            resultElement.innerHTML = "You played " + userChoice + ", computer played " + computerChoice + ", you lose! Number of plays: " + numberPlays + ", number of wins: " + numberWins;
        }
    }

});
