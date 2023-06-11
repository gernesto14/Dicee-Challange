//Create random numbers 1-6
function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

document.getElementById("dice-p-one").src = "../images/dice3.png";

let playerDiceeOne = diceeCase(randomNumber());
document.getElementById("dice-p-one").src = playerDiceeOne;
let playerDiceeTwo = diceeCase(randomNumber());
document.getElementById("dice-p-two").src = playerDiceeTwo;

function diceeCase(playerNumber) {
  switch (playerNumber) {
    case 1:
      return "../images/dice1.png";
      break;
    case 2:
      return "../images/dice2.png";
      break;
    case 3:
      return "../images/dice3.png";
      break;
    case 4:
      return "../images/dice4.png";
      break;
    case 5:
      return "../images/dice5.png";
      break;
    case 6:
      return "../images/dice6.png";
      break;
    default:
      console.log("Error at switch case");
      break;
  }
}

console.log();
