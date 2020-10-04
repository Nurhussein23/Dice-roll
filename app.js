
const diceTriggerlEl = document.querySelector(".dice__trigger");
const diceImageEL = document.querySelector(".dice__image");


function getRandomNumber(){

  return 1 + Math.floor(Math.random() * 6);
}


function showDice(){


  diceTriggerlEl.addEventListener("click", function(){
   let myRandomNumber = getRandomNumber();
    diceImageEL.src = "images/dice" + myRandomNumber + ".png"
  })
}

showDice();