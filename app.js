let rockbtn = document.querySelector("#rock");
let paperbtn = document.querySelector("#paper");
let scissorsbtn = document.querySelector("#scissors");
let userValue = "";
let cpuValue = "";
let finalText  = document.querySelector(".game-outcome-text");
let cpuScore = document.querySelector(".cpu-score");
let userScore = document.querySelector(".user-score");
let newGameBtn = document.querySelector("#new-game-btn");
let cpuScoreValue = 0;
let userScoreValue = 0;





rockbtn.addEventListener("click",() =>{
    userValue = "rock";
    decideOutcome();


});

paperbtn.addEventListener("click",() =>{
    userValue = "paper";
    decideOutcome();
});

scissorsbtn.addEventListener("click",() =>{
    userValue = "scissors";
    decideOutcome();


});

const cpuGame = () => {
    let arr = ["rock","paper","scissors"];
    let val = randomNumGenerator();
    cpuValue = arr[val];
    return cpuValue;

}

const randomNumGenerator = () => {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}

const decideOutcome = () => {
    cpuGame();

    if (userValue === cpuValue){
        finalText.innerText = "its a draw";       
    }
    else if (userValue == "rock" && cpuValue == "paper"){
        finalText.innerText = `CPU chose ${cpuValue}. You chose ${userValue}.CPU wins`;
        cpuScoreValue += 1; 
        cpuScore.innerText = cpuScoreValue;
    }
    else if (userValue == "paper" && cpuValue == "rock"){
        finalText.innerText = `CPU chose ${cpuValue}. You chose ${userValue}.User wins `;
        userScoreValue += 1;
        userScore.innerText = userScoreValue;
    }
    else if (userValue == "paper" && cpuValue == "scissors"){
        finalText.innerText = `CPU chose ${cpuValue}. You chose ${userValue}.CPU wins `;
        cpuScoreValue += 1; 
        cpuScore.innerText = cpuScoreValue;
    }
    else if (userValue == "scissors" && cpuValue == "paper"){
        finalText.innerText = `CPU chose ${cpuValue}. You chose ${userValue}.User wins `;
        userScoreValue += 1;
        userScore.innerText = userScoreValue;
        
    }
    else if (userValue == "scissors" && cpuValue == "rock"){
        finalText.innerText = `CPU chose ${cpuValue}. You chose ${userValue}.CPU wins `;
        cpuScoreValue += 1; 
        cpuScore.innerText = cpuScoreValue;
    }
    else if (userValue == "rock" && cpuValue == "scissors"){
        finalText.innerText = `CPU chose ${cpuValue}. You chose ${userValue}.User wins `;
        userScoreValue += 1; 
        userScore.innerText = userScoreValue;
    }

};

newGameBtn.addEventListener("click",() => {
    newGame();
});

const newGame = () => {
    finalText.innerText = "";
    userScoreValue = 0;
    cpuScoreValue = 0;
    userScore.innerText = 0;
    cpuScore.innerText = 0;



};