
var randomNumber1 = (Math.random() * 5) + 1;
randomNumber1 = Math.round(randomNumber1);

var image1 = "images/" + "dice" + randomNumber1 + ".png";

var pic1 = document.querySelectorAll("img")[0];

pic1.setAttribute("src", image1);


var randomNumber2 = (Math.random() * 5) + 1;
randomNumber2 = Math.round(randomNumber2);

var image2 = "images/" + "dice" + randomNumber2 + ".png";

var pic2 = document.querySelectorAll("img")[1];

pic2.setAttribute("src", image2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else if(randomNumber2 == randomNumber1){
  document.querySelector("h1").innerHTML = "Draw";
}
