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
    } else {
      allNumbers.push(i);
    }
  }




  return allNumbers
}



var disqualifyTest = function(numInput) {       //This number is a disqualifying test to make certain that the user inputted actual numbers into the program.
  return /^[0-9]*$/gi.test(numInput);
}


// *************************************************
// Front End Code
// *************************************************
$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($('input#uxInput').val());   //This will take the user's input and establish it as a variable.
    if (disqualifyTest(inputNumber) === true) {             //This will run a disqualifying test to make certain that the number put in was an actual 0-9 number.
      $("#displayHere").empty();                            //This just empties the area where the text will be displayed
      var finalPrintOut = pingPong(inputNumber);            //This will establish the output of the function as a variable at this end.

      finalPrintOut.forEach(function(outputNumber) {
        $("#displayHere").append("<li>"+outputNumber+"</li>");
      });

      //$("#displayHere").text(finalPrintOut);




    } else {
      alert("Please don't be ridiculous!");
    }








  });
});
