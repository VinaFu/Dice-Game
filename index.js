// var randomNumber1= Math.floor(Math.random () *6)+1;

// var randomDiceImage="dice" + randomNumber1+ ".png";

// var randomImageSource="image/" + randomDiceImage;

// var image1=document.querySelectorAll("img")[0];

// image1.setAttribute("src",randomImageSource);

var randomNumber1 = Math.floor(Math.random () *6)+1
document.querySelectorAll("img")[0].setAttribute("src","image/dice" + randomNumber1 + ".png")



var randomNumber2= Math.floor(Math.random () *6)+1;

var randomImageSource="image/dice" + randomNumber2 + ".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent= "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){ document.querySelector("h1").textContent="Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw";
}