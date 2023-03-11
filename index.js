var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceimage1 = "dice"+randomNumber1+".png";
var randomDiceimage1Source = "images/"+randomDiceimage1;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceimage1Source);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceimage2 = "dice"+randomNumber2+".png";
var randomDiceimage2Source = "images/"+randomDiceimage2;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceimage2Source);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
} else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "It's a draw!"
}
