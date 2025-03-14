console.log("tess");

const inputButton = document.querySelector("#inputButton");
const log = document.querySelector("#log");

inputButton.addEventListener("click", () => {
  let sign = prompt("What's your choice between rock, paper and scissors?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  randomValue = getRandomInt(3);
  switch (randomValue) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}

function getHumanChoice(){
  
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());