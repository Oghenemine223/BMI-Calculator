// script.js
var submitBtn = document.getElementById("submitBtn");
var resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", function() {
  // Collect input values
  var input1Value = document.getElementById("height").value;
  var input2Value = document.getElementById("weight").value;

  var BMI = BMIcalculator(input1Value, input2Value);

  // Perform actions with the collected data
  var result = "Your BMI is = " + BMI + "kg/m" + <sup>2</sup>;

  // Display the result
  resultDiv.innerHTML = result;
});


// BMI Calculation
function BMIcalculator(height, weight) {
    var BMIformula = weight / Math.pow(height, 2);
    return Math.round(BMIformula);
}





