// *************************************************
// Back End Code
// *************************************************

var pingPong = function(userInput) {
  var allNumbers = [];
  for (var i = 1; i <= userInput; i++) {        //This will start at 1 and cycle up to the user's input.
    if ((i % 3 === 0) && (i % 5 === 0)) {       //This is here to prevent numbers like 15, which are divisible by both 5 and 3 from ending up with two separate entries.
      allNumbers.push("pingpong");
    } else if (i % 3 === 0) {                   //This line will create a "ping" entry for numbers divisible by 3.
      allNumbers.push("ping");
    } else if (i % 5 === 0) {                   //This line will create a "pong" entry for numbers divisible by 5.
      allNumbers.push("pong");
    } else {                                    //For all other conditions, simply push the number directly into the array.
      allNumbers.push(i);
    }
  }
  return allNumbers
}
var disqualifyTest = function(toBeTested) {       //This number is a disqualifying test to make certain that the user inputted actual numbers into the program.
  return /^[0-9]*$/gi.test(toBeTested);
}
// *************************************************
// Front End Code
// *************************************************

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var inputText = $('input#uxInput').val().toUpperCase();   //This will take the user's input and establish it as a variable.
    if (inputText === "BEWARE OF ZOMBIES") {    //Go ahead, type it into the input box... I dare you.
      var audio = new Audio('sound/zombie.mp3');
      audio.play();
      $(".zombie").show();
      var delayMillis = 2000; //2 seconds
      setTimeout(function() {
        $(".zombie").hide();
      }, delayMillis);
    }
    var inputNumber = parseInt(inputText);      //This will ensure that the user's input is in integer form for compatibility.
    if (inputNumber > 10000) {
      alert("Ask yourself if you REALLY *want* to see a list of numbers that long...");
      return
    }
    var directionInput = $("input:radio[name=direction]:checked").val();  //This will return whichever direction the user wants the list to read.
    $("#displayHere").empty();                              //This line will clear the display every time the users presses submit.
    if (disqualifyTest(inputNumber) === true) {             //This will run a disqualifying test to make certain that the number put in was an actual 0-9 number.
      var audio = new Audio('sound/pingpong.mp3');          //This line will establish a sound effect.
      audio.play();                                         //This line will run the sound effect when the user hits submit.
      var finalPrintOut = pingPong(inputNumber);    //This will establish the output of the function as a variable at this end.
      if (directionInput === 'forward') {
        finalPrintOut.forEach(function(outputNumber) {        //This part goes through each item in the array and converts it into a list item.
          $("#displayHere").append("<li>"+outputNumber+"</li>");
        });
      } else if (directionInput === 'reverse') {
        finalPrintOut.forEach(function(outputNumber) {        //This part goes through each item in the array and converts it into a list item.
          $("#displayHere").prepend("<li>"+outputNumber+"</li>"); //Instead of appending, we will prepend the list, such that it goes in reverse order.
        });
      }
    } else {
      alert("Please don't be ridiculous!");
      return
    }
  });

  var randomNumber = Math.floor((Math.random() * 4) + 1);
  if (randomNumber == 1) {
    $("#quoteHere").append("Zombies are a lot like programmers, they love you for your brains.");
    $("#authorHere").append("Anonymous");
  } else if (randomNumber == 2) {
    $("#quoteHere").append("Zombies love you for what's on the inside.");
    $("#authorHere").append("Anonymous");
  } else if (randomNumber == 3) {
    $("#quoteHere").append("Something coming back from the dead was almost always bad news... for every one Jesus you get a million zombies.");
    $("#authorHere").append("David Wong");
  } else if (randomNumber == 4) {
    $("#quoteHere").append("Zombies hate fast food.");
    $("#authorHere").append("Anonymous");
  }


});
