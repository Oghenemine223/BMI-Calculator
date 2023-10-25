
// script.js
var submitBtn = document.getElementById("submitBtn");
var resultDiv = document.getElementById("result");
var text = document.getElementById("text");

submitBtn.addEventListener("click", function() {
  // Collect input values
  var input1Value = document.getElementById("height").value;
  var input2Value = document.getElementById("weight").value;

  var BMI = BMIcalculator(input1Value, input2Value);
  var iffunction = textb(BMI);
  
  // Perform actions with the collected data
  var result = "Your BMI is = " + BMI + " kg/m<sup>2</sup>";
  
  // Display the result
  resultDiv.innerHTML = result;
  text.innerHTML = iffunction;
});


// BMI Calculation
function BMIcalculator(height, weight) {
    var BMIformula = weight / Math.pow(height, 2);
    return Math.round(BMIformula);
}

function textb(BMI) {
  var r18 = "";
  var r24 = "";
  var re24 = "";
  
  if (BMI < 18.5) {
    r18 = "so you are underweight.";
  }
  
  if (BMI >= 18.5 && BMI <= 24.9) {
    r24 = "so you have a normal weight.";
  }
  
  if (BMI > 24.9) {
    re24 = "so you are overweight.";
  }

  return r18 + " " + r24 + " " + re24;
}

