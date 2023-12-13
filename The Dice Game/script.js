var player1 = 0, player2 = 0;
var res = document.getElementById("result");

function resetGame() {
    var image = "dice6.png";
    document.querySelectorAll("img")[0].setAttribute("src", image);
    document.querySelectorAll("img")[1].setAttribute("src", image);

    player1 = 0;
    player2 = 0;
    
    res.innerHTML = "New Game";
}

function startGame() {
    var random1 = Math.floor(Math.random() * 6) + 1; //1 to 6
    var randomImage1 = "dice" + random1 + ".png";

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImage1);

    var random2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "dice" + random2 + ".png";

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage2);

    // var res = document.getElementById("result");


    if (random1 > random2) {
        player1 = player1 + 1;
        player2 = player2;
    }
    else if (random2 > random1) {
        player1 = player1;
        player2 = player2 + 1;
    }
    else {
        res.innerHTML = "Game draw!";
        player1 = player1;
        player2 = player2;
    }
    res.innerHTML = "Player 1: " + player1 + " Player 2 : " + player2;
}

function ShowScore(){
    if(player1==0 && player2==0){
        res.innerHTML="Play the game &#128519";
    }
    else if(player1>player2){
        res.innerHTML="Player 1 wins &#128512 ...  Player 2 loses &#128532";
    }
    else if(player2>player1){
        res.innerHTML="Player 2 wins &#128512 ...  Player 1 loses &#128532 "
    }
    else{
        res.innerHTML="Both have same score &#128519";
    }
}