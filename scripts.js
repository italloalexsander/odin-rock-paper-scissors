//Function that returns either Rock, Paper or Scissors
let computerPlay = () => {

    //A number between 1 and 3 must be returned
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    if(computerChoice === 1){
        return "rock";
    }
    else if(computerChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

//Function that plays a Round of Rock, Paper and Scissors
let gamePlay = (userSelection, computerSelection) =>{

    if(userSelection === computerSelection){
        return "Draw"
    }
    else if(userSelection === "rock"){
        if(computerSelection === "paper"){
            return "ComputerWins"
        }
        else{
            return "UserWins"
        }
    }else if(userSelection === "paper"){
        if(computerSelection === "scissors"){
            return "ComputerWins"
        }
        else{
            return "UserWins"
        }
    }else if(userSelection === "scissors"){
        if(computerSelection === "rock"){
            return "ComputerWins"
        }
        else{
            return "UserWins"
        }
    }
}

//This function will play a 5 round game of RPS
/*let game = () =>{

    totalWinsUser = 0;
    totalWinsComputer = 0;

    for(let i = 0; i < 5; i++){
        let userSelection = prompt("Rock, Paper or Scissors? ")
        userSelection = userSelection.toLowerCase();
        let computerSelection = computerPlay();
        let result = gamePlay(userSelection, computerSelection)
        if(result === "Draw"){
            console.log("Draw! Both you and the computer have chosen " + userSelection);
        }else if(result === "ComputerWins"){
            console.log("You Lost! The computer " + computerSelection + " beats your " + userSelection);
            totalWinsComputer++;
        }
        else if(result === "UserWins"){
            console.log("You WON! Your " + userSelection + " beats the computer " + computerSelection)
            totalWinsUser++;
        }
    }

    if(totalWinsUser > totalWinsComputer){
        console.log("YOU WON IT ALL!");
    }else if(totalWinsUser < totalWinsComputer){
        console.log("YOU LOST IT ALL!");
    }else{
        console.log("IT'S A DRAW");
    }
}*/



game();