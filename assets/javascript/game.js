// four buttons with random numbers between 1-12 attached to each button.  Hidden from User.
// generate a random number between 19-120.  display Number.
// when the four buttons are clicked their values are added to each other.  Display Number.
// the total value of the crystals clicked is compared to the other randomly generated number.
// if the total of crystals clicked is === to the other randomly generated number You Win.
// if the total of crystals clicked is > than the randomly generated number you lose.

// if Win then 1. generate a new random number between 19-120. 
//             2. generate new random numbers between 1-12 for crystal buttons. 
//             3. reset users score
//             4. wins++

// if Lose then 1. generate a new random number between 19-120. 
//              2. generate new random numbers between 1-12 for crystal buttons. 
//              3. reset users score
//              4. loses++

// function reset () {
//      generate a new random number between 19-120, 
//      generate new random numbers between 1-12 for crystal buttons.
//      reset users score
// }
var wins = 0;
var loses= 0;
var crystalTotal = 100;


function reset () {

var numToMatch = Math.floor(Math.random()*(120-19+1)+19);
console.log(numToMatch);

var crystal1 = Math.floor(Math.random()*12)+1;
console.log(crystal1);

var crystal2 = Math.floor(Math.random()*12)+1;
console.log(crystal2);

var crystal3 = Math.floor(Math.random()*12)+1;
console.log(crystal3);

var crystal4 = Math.floor(Math.random()*12)+1;
console.log(crystal4);

$("#number").html("<h2>" + crystalTotal + "</h2>");

$("#number").text(crystal1);

$("#wins").text(wins);

$("#loses").text(loses);

}


reset ();


