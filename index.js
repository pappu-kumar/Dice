

    var rn = Math.floor(Math.random()*6) + 1;  //random number

var rdi = "dice" + rn + ".png";  //random dice image 

var rdis = "images/" + rdi; //random dice image source


var img1 = document.querySelector("img");

img1.setAttribute("src", rdis);
