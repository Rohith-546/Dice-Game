function roll()
{
  var randomNumber1 = Math.floor(Math.random()*6) + 1;
  var k1 = "images/dice"+randomNumber1.toString()+".png";
  document.querySelector(".img1").setAttribute("src", k1);

  var randomNumber2 = Math.floor(Math.random()*6) + 1;
  var k2 = "images/dice"+randomNumber2.toString()+".png";
  document.querySelector(".img2").setAttribute("src", k2);

  if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player 1 Wins🚩";
  }
  else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerText="Player 2 Wins🚩";
  }
  else {
    document.querySelector("h1").innerText="Draw";
  }
}
