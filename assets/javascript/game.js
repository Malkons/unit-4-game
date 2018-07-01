$(document).ready(function () {

    // Global variables declared
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var crystalArray = []
    var numToMatch = Math.floor(Math.random() * (120 - 19 + 1) + 19);



    //reset function.
    function reset() {

        crystalArray = [];

        numToMatch = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#number").text("Reach total to convert to Emeralds: " + numToMatch);

        while (crystalArray.length < 4) {
            var ranCrysNum = Math.floor(Math.random() * 12) + 1;
            // checks for duplicate random numbers. 
            if (crystalArray.indexOf(ranCrysNum) === -1) {
                crystalArray.push(ranCrysNum);
                console.log(crystalArray);
            }
        }

        diamond.attr("data-crystalvalue", crystalArray[0]);
        redstone.attr("data-crystalvalue", crystalArray[1]);
        coal.attr("data-crystalvalue", crystalArray[2]);
        flint.attr("data-crystalvalue", crystalArray[3]);

        userScore = 0;
        $("#userscore").text("Resources converted: " + userScore);
    }

    // Check for the Win function.
    function checkWin() {
        if (userScore === numToMatch) {
            wins++;
            $("#wins").text("Success: " + wins);
            reset();
        } else if (userScore > numToMatch) {
            losses++
            $("#losses").text("Fails: " + losses);
            reset();
        }
    }



    // shows User Score, Wins, Losses, and Number to Match on webpage.
    $("#userscore").text("Resources converted: " + userScore);
    $("#wins").text("Success: " + wins);
    $("#losses").text("Fails: " + losses);
    $("#number").text("Reach total to convert to Emeralds: " + numToMatch);

    // creates  4  random numbers, and then populates an array with said numbers.
    while (crystalArray.length < 4) {
        var ranCrysNum = Math.floor(Math.random() * 12) + 1;
        // checks for duplicate random numbers. 
        if (crystalArray.indexOf(ranCrysNum) === -1) {
            crystalArray.push(ranCrysNum);
            console.log(crystalArray);
        }
    }

    // Sets variables to the their respective divs. 
    var diamond = $("#diamond");
    var redstone = $("#redstone");
    var coal = $("#coal");
    var flint = $("#flint");

    // Assign array numbers to the seperate divs.
    diamond.attr("data-crystalvalue", crystalArray[0]);
    redstone.attr("data-crystalvalue", crystalArray[1]);
    coal.attr("data-crystalvalue", crystalArray[2]);
    flint.attr("data-crystalvalue", crystalArray[3]);

    // First button.
    $("#diamond").on("click", function () {
        var crystalValue1 = diamond.attr("data-crystalvalue");
        crystalValue1 = parseInt(crystalValue1);
        userScore += crystalValue1;
        $("#userscore").text("Resources converted: " + userScore);
        checkWin();
    });

    // Second button.
    $("#redstone").on("click", function () {
        var crystalValue2 = redstone.attr("data-crystalvalue");
        crystalValue2 = parseInt(crystalValue2);
        userScore += crystalValue2;
        $("#userscore").text("Resources converted: " + userScore);
        checkWin();
    });

    // Third button.
    $("#coal").on("click", function () {
        var crystalValue3 = coal.attr("data-crystalvalue");
        crystalValue3 = parseInt(crystalValue3);
        userScore += crystalValue3;
        $("#userscore").text("Resources converted: " + userScore);
        checkWin();
    });

    // Fourth button.
    $("#flint").on("click", function () {
        var crystalValue4 = flint.attr("data-crystalvalue");
        crystalValue4 = parseInt(crystalValue4);
        userScore += crystalValue4;
        $("#userscore").text("Resources converted: " + userScore);
        checkWin();
    });

});








