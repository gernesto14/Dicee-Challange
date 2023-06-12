//Set Default
document.getElementById("dice-p-one").src = "../images/dice1.png";
document.getElementById("dice-p-two").src = "../images/dice1.png";

//Create random numbers 1-6
function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

//Set numbers case for images
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
//Roll btn event
let roll = document.getElementById("roll");
roll.addEventListener("click", () => {
  console.log("rolling");
  //Set players numbers and update img element with players number
  //Player One Dice
  let playerDiceeOne = diceeCase(randomNumber());
  document.getElementById("dice-p-one").src = playerDiceeOne;
  //Player Two Dice
  let playerDiceeTwo = diceeCase(randomNumber());
  document.getElementById("dice-p-two").src = playerDiceeTwo;

  //Announce winner
  if (playerDiceeOne > playerDiceeTwo) {
    //Player one wins
    document.getElementById("header").innerText = "🚩player one wins!";
  } else if (playerDiceeOne < playerDiceeTwo) {
    //Player two wins
    document.getElementById("header").innerText = "player two wins!🚩";
  } else {
    //Draw
    document.getElementById("header").innerText = "Draw!";
  }
});
