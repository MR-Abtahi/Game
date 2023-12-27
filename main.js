let playerMove = document.querySelector("#playerMove");
let computerMove = document.querySelector("#computerMove");
let result = document.querySelector("#result");
let btn = document.querySelectorAll("#btn");

let player;
let comptuer;

btn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    comptureWork();

    playerMove.textContent = `You: ${player}`;
    computerMove.textContent = `Computer: ${comptuer}`;
    result.textContent = winner();
}));

function comptureWork(){

    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            comptuer = "RACK";
            break;
        case 2:
            comptuer = "PAPER";
            break;
        case 3:
            comptuer = "SCISSOR"; 
            break;       
    } 
}

function winner(){
    if(comptuer === player){
        return "Equil💫";
    }
    else if(comptuer === "RACK"){
        return (player === "PAPER") ? "You Win😃" : "You lose🥴";
    }
    else if(comptuer === "PAPER"){
        return (player === "SCISSOR") ? "You Win😃" : "You lose🥴";
    }
    else if(comptuer === "SCISSOR"){
        return (player === "RACK") ? "You Win😃" : "You lose🥴";
    }
    
}