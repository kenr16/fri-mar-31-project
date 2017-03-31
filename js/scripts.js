// *************************************************
// Back End Code
// *************************************************

var pingPong = function(userInput) {

  var allNumbers = [];

  for (var i = 1; i <= userInput; i++) {
    if (i % 3 === 0) {
      allNumbers.push("ping");
    } else {
      allNumbers.push(i);
    }

    
  }




  return allNumbers
}



var disqualifyTest = function(numInput) {
  return /^[0-9]*$/gi.test(numInput);
}


// *************************************************
// Front End Code
// *************************************************
$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($('input#uxInput').val());
    var finalPrintOut = pingPong(inputNumber);
    $("#displayHere").text(finalPrintOut);





  });
});
