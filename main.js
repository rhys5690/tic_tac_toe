var playerTurn = "X";

var getTurn = function(el) {
    // make sure no one has moved in that square yet - hint el.html() === ""
    if (playerTurn === "X") {
        placeX(el);
    } else {
        placeO(el);
    }
};

var placeO = function(el) {
    console.log("place0");
    el.html("O"); //'this' brings in the class
    //of '$(.button)' that was clicked
    el.css({
        "font-size": "100px",
        "color": "black",

    });
    playerTurn = "X";
    // $classOfButton.on("click", placeX);
};

var placeX = function(el) {

    console.log("placeX");
    el.html("X"); //'this' brings in the class
    //of '$(.button)' that was clicked
    el.css({
        "font-size": "100px",
        "color": "black",
    });
    // $classOfButton.on("click", placeO);
    playerTurn = "O";
};

var boardHide = function() {
    var container = $(".buttonWrapper");
    container.hide();
};

//Game over show image

var gameOver = function() {
    endCat.show();
};


//Hide end cat image

var endCat = $(".endImage");

endCat.hide();


//Create game logic to show
//when somebody wins and loses (3 in a row)
//use if statements
//note $("selector").html() shows the HTML within a variable

var gameLogic = function() {

    //For X to win


    if ($(".topLeft").html() + $(".topMiddle").html() + $(".topRight").html() === "XXX") {
        gameOver();
        boardHide();
    } else if ($(".middleLeft").html() + $(".middleMiddle").html() + $(".middleRight").html() === "XXX") {
        console.log("X WINS!!");
    } else if ($(".bottomLeft").html() + $(".bottomMiddle").html() + $(".bottomRight").html() === "XXX") {
        console.log("X WINS!!");
    } else if ($(".topLeft").html() + $(".middleLeft").html() + $(".bottomLeft").html() === "XXX") {
        console.log("X WINS!!");
    } else if ($(".topMiddle").html() + $(".middleMiddle").html() + $(".bottomMiddle").html() === "XXX") {
        console.log("X WINS!!");
    } else if ($(".topRight").html() + $(".middleRight").html() + $(".bottomRight").html() === "XXX") {
        console.log("X WINS!!");
    } else if ($(".topLeft").html() + $(".middleMiddle").html() + $(".bottomRight").html() === "XXX") {
        console.log("X WINS!!");
    } else if ($(".topRight").html() + $(".middleMiddle").html() + $(".bottomLeft").html() === "XXX") {
        console.log("X WINS!!");


///O wins
    } else if ($(".topLeft").html() + $(".topMiddle").html() + $(".topRight").html() === "OOO") {
        console.log("O WINS!!"); ///why doesn't it work
    } else if ($(".middleLeft").html() + $(".middleMiddle").html() + $(".middleRight").html() === "OOO") {
        console.log("O WINS!!");
    } else if ($(".bottomLeft").html() + $(".bottomMiddle").html() + $(".bottomRight").html() === "OOO") {
        console.log("O WINS!!");
    } else if ($(".topLeft").html() + $(".middleLeft").html() + $(".bottomLeft").html() === "OOO") {
        console.log("O WINS!!");
    } else if ($(".topMiddle").html() + $(".middleMiddle").html() + $(".bottomMiddle").html() === "OOO") {
        console.log("O WINS!!");
    } else if ($(".topRight").html() + $(".middleRight").html() + $(".bottomRight").html() === "OOO") {
        console.log("O WINS!!");
    } else if ($(".topLeft").html() + $(".middleMiddle").html() + $(".bottomRight").html() === "OOO") {
        console.log("O WINS!!");
    } else if ($(".topRight").html() + $(".middleMiddle").html() + $(".bottomLeft").html() === "OOO") {
        console.log("O WINS!!");
    }

};



var $classOfButton = $("button");

$classOfButton.on("click", function() {
    var element = $(this);
    getTurn(element);
});

$classOfButton.on("click", gameLogic);


///Create animation on win
