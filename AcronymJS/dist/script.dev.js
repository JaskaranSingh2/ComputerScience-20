"use strict";

function process() {
  var input = document.getElementById("grab").value;

  var _final = input.toUpperCase();

  var values = ["KFC", "MCD", "SSN", "LOL", "GDP", "PPP"];
  var actual = ["Kentucky's Fried Chicken", "MacDonald's", "Social Security Number", "Laugh Out Loud", "Gross Domestic Product", "Purchasing Power Parity"];
  var reportInHTML = document.getElementById("display");
  var foundInArray = false; // (l. 8) --> Truth test: start by assuming it is false (not found in Array) [utilization of reverse logical operator // single bang]

  for (var i = 0; i < values.length; i++) {
    if (_final == values[i]) {
      foundInArray = true; // if it is found, then it is true.

      reportInHTML.innerHTML = actual[i];
    }
  } // Condition for 'if not found':
  // Exclamation mark inverses boolean value, basically meant "not" as in 'not' operator
  // if 'not found in array'


  if (!foundInArray) {
    reportInHTML.innerHTML = "NOT FOUND";
  }
} // No need to call function because it is already called in "onclick"
// Important lesson: Truth Tests