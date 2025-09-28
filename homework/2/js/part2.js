// Output
var output = "";
// DOM elements
var numberOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');
var numberThree = document.getElementById('numberThree');
var resultsOutput = document.getElementById('resultsOutput');

// jQuery code to fade #results textArea
$(document).ready(function () {
  $('#fade-results').on('click', function () {
    $('#results').fadeToggle('slow'); // Toggle fade with a 'slow' speed
  });
});

function process() {
  var num1, num2, num3;
  // Display error message if input is not numeric, otherwise display calculation esults
  if (!isNumeric(numberOne.value) || !isNumeric(numberTwo.value) || !isNumeric(numberThree.value)) {
    output = "Error: Invalid input :/ Numbers only!"
  } else {
    num1 = +numberOne.value;
    num2 = +numberTwo.value;
    num3 = +numberThree.value;

    // Calculations to 3 decimal places
    const sum = (num1 + num2 + num3).toFixed(3);
    const average = (sum / 3).toFixed(3);
    const product = (num1 * num2 * num3).toFixed(3);
    const min = Math.min(num1, num2, num3);
    const max = Math.max(num1, num2, num3);

    // output
    output = "Sum: " + sum
      + "\nAverage: " + average
      + "\nProduct: " + product
      + "\nMin: " + min + ", Max: " + max;
  }

  resultsOutput.value = output;
}

/**
 * Tests if string is numeric
 * @param {string} str - The string to test
 */
function isNumeric(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}

