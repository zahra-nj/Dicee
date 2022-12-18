
function diceClick(){
    var randomNumber1 = Math.floor(Math.random()*(7-1)+1);
    var randomDiceImg = "images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImg);

    var randomNumber2 = Math.floor(Math.random()*(7-1)+1);
    var randomDiceImg = "images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImg);


    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML= "🚩 player 1 wins!";
    }else if(randomNumber2 > randomNumber1){
        document.querySelector('h1').innerHTML= "player 2 wins! 🚩";
    }else{
        document.querySelector('h1').innerHTML= "🚩 equal 🚩";
    }


    if(randomNumber1 > randomNumber2){
        document.querySelector('.heading-title-farsi').innerHTML= "🚩بازیکن اول برنده شد ";
    }else if(randomNumber1 < randomNumber2){
        document.querySelector('.heading-title-farsi').innerHTML= "بازیکن دوم  برنده شد 🚩";
    }else{
        document.querySelector('.heading-title-farsi').innerHTML= "🚩مساوی شدین 🚩";
    }

}
