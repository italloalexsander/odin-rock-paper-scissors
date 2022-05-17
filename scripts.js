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

