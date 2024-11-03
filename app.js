let rockbtn = document.querySelector("rock");
let paperbtn = document.querySelector("paper");
let scissorsbtn = document.querySelector("scissors");
let userValue = "";
let cpuValue = "";


rockbtn.addEventListener("click",() =>{
    userValue = "rock";


});

paperbtn.addEventListener("click",() =>{
    userValue = "paper";


});

scissorsbtn.addEventListener("click",() =>{
    userValue = "scissors";


});

const cpuGame = () => {
    let arr = ["rock","paper","scissors"];
    let val = randomNumGenerator;
    cpuValue = arr[val];
    return cpuValue;

}

const randomNumGenerator = () => {
    let randomNum = math.floor(math.random * 3);
    return randomNum;
}

const decideOutcome = () => {
    
}