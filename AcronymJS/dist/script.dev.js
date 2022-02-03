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
  // Single Bang: Reverses the logic of the operator --> If final != values[i], foundInArray remains false. 
  // By utilizing the "!" before the variable, we imply that it is the opposite of the boolean value prescribed.
  // If Statements only proceed if the condition is true.
  // If foundInArray being false is true, then the if statement will proceed.
  // Setting the "!" returns the opposite boolean value of foundInArray: 
  //      If it is false, it will return the opposite (true) and proceed. 
  //      If it is true, it will return the opposite (false) and not proceed.
  // I don't think this is smart notation because it's messy logic, should just state desired boolean value.
  // This is outside because it would get rerun in for loop.
  // the opposite of something doesn't imply equality**


  if (!foundInArray) {
    reportInHTML.innerHTML = "NOT FOUND";
  }
} // No need to call function because it is already called in "onclick"