$(document).ready(function() {
    firstClick = false
    trumpify();
    firstClick = true;
    $("#reTrump").click(trumpify);
});

// String possibilities
DIM_LIM = 15;
GAMES = ["chess", "checkers", "parcheesi", "backgammon", "mahjong", "tic-tac-toe"];
ADJECTIVES = ["quantum", "interdimensonal", "nonlinear", "interstellar"];

// Form a Trump string from random strings in the global lists
function trumpify() {
    var dim = getRand(4, DIM_LIM + 1); // No sense in playing any game below the 4th dimension
    var game = GAMES[getRand(0, GAMES.length)];
    var adj = ADJECTIVES[getRand(0, ADJECTIVES.length)];

    var gameString = dim + "-dimensional " + adj + " " + game;
    $("#game").text(gameString);
    // Deliver The Donald if this is the first click
    if (firstClick) {
        firstClick = false;
        $('#trump').delay(1000).fadeIn(3000);
    }
}
// [low, high) => int
function getRand(low, high) {
    return Math.trunc(Math.random() * (high - low) + low);
}
