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
    var inputText = $('input#uxInput').val();   //This will take the user's input and establish it as a variable.
    if (inputText === "Beware of zombies") {
      var audio = new Audio('sound/zombie.mp3');
      audio.play();
      $(".zombie").show();
      var delayMillis = 2000; //2 seconds
      setTimeout(function() {
        $(".zombie").hide();
      }, delayMillis);
    }
    var inputNumber = parseInt(inputText);
    var directionInput = $("input:radio[name=direction]:checked").val();
    $("#displayHere").empty();                              //This line will clear the display every time the users presses submit.
    if (disqualifyTest(inputNumber) === true) {             //This will run a disqualifying test to make certain that the number put in was an actual 0-9 number.
      var audio = new Audio('sound/pingpong.mp3');
      audio.play();
      var finalPrintOut = pingPong(inputNumber);    //This will establish the output of the function as a variable at this end.
      if (directionInput === 'forward') {
        finalPrintOut.forEach(function(outputNumber) {        //This part goes through each item in the array and converts it into a list item.
          $("#displayHere").append("<li>"+outputNumber+"</li>");
        });
      } else if (directionInput === 'reverse') {
        finalPrintOut.forEach(function(outputNumber) {        //This part goes through each item in the array and converts it into a list item.
          $("#displayHere").prepend("<li>"+outputNumber+"</li>");
        });
      }
    } else {
      alert("Please don't be ridiculous!");
      return
    }
  });
});
