// *************************************************
// Back End Code
// *************************************************





var disqualifyTest = function(numInput) {
  return /^[0-9]*$/gi.test(numInput);
}


// *************************************************
// Front End Code
// *************************************************
$(document).ready(function() {
  $(".formOne").submit(function(event) {
    var inputNumber = parseInt($('input#uxInput').val());
    alert("Input Recieved!");
    alert(inputNumber);





  });
});
