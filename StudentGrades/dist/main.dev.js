"use strict";

// Student Grades Assignment Start Code
// HTML Variables
var containerEl = document.getElementById("container");
var outputEl = document.getElementById("output");
var goBtnEl = document.getElementById("go");
var menuEl = document.getElementById("menu"); // Global Variable

var grades = [60, 70, 80, 65, 90, 83];
var maxGrade = 100; // grade values should be b/t 0 and max
// Display Data

drawArray(); // Main Menu & Go Button

goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  var selection = menuEl.value; // Take action based on menu selection

  if (selection === "first40") {
    firstTo40();
  } else if (selection === "last50") {
    lastTo50();
  } else if (selection === "random100") {
    randomTo100();
  } else if (selection === "addRandom") {
    addRandomGrade();
  } else if (selection === "removeLast") {
    removeLastGrade();
  } else if (selection === "count50") {
    countBelow50();
  } else if (selection === "change50") {
    lowGradesTo50();
  } else if (selection === "increase10") {
    increaseGradesBy10();
  } else if (selection === "decrease10") {
    decreaseGradesBy10();
  } // Redraw array to show any changes


  drawArray();
} // ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************


function firstTo40() {
  // Set the grade of the first student to 40.
  outputEl.innerHTML = "First grade to 40";
  grades[0] = 40;
}

function lastTo50() {
  // Set the grade of the last student to 50.
  outputEl.innerHTML = "Last grade to 50";
  grades[grades.length - 1] = 50; // minus (-) 1 because we want last index position which is one less than the length
}

function randomTo100() {
  // Set the grade of a random student to 100.
  outputEl.innerHTML = "Random grade to 100";
  var randomIndex = Math.floor(Math.random() * grades.length);
  grades[randomIndex] = 100;
}

function addRandomGrade() {
  // Add a random grade between 0 and 100 to the end of the array.
  outputEl.innerHTML = "Add random grade";
  var randomGrade100 = Math.floor(Math.random() * 101);
  grades.push(randomGrade100); // Math.random() doesn't include 1, it includes till 0.999999... so we choose 101 so that the maximum floor value is 100.
  // 0.99999... * 101 < 101 
}

function removeLastGrade() {
  // Remove the last grade.
  outputEl.innerHTML = "Remove the last grade";
  grades.pop();
}

function countBelow50() {
  // Count how many grades are below 50.  Output the result.
  outputEl.innerHTML = "Count grades below 50";
  var count = 0;

  for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      count++;
    }
  }

  outputEl.innerHTML += " | " + "Grades lowers than 50 counted: " + count;
}

function lowGradesTo50() {
  // Change all grades that are below 50 to be equal to 50.
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      grades[i] = 50;
    }
  }

  outputEl.innerHTML = "Change low grades to 50";
}

function increaseGradesBy10() {
  // Increase each grade by 10%.
  outputEl.innerHTML = "Increase all grades by 10%";

  for (var i = 0; i < grades.length; i++) {
    grades[i] = 50;
  }
}

function decreaseGradesBy10() {
  // Decrease each grade by 10%.
  outputEl.innerHTML = "Decrease all grades by 10%";
} // Function to draw current state of grades array


function drawArray() {
  var outputStr = "";
  var divHeight;

  for (var i = 0; i < grades.length; i++) {
    divHeight = grades[i] / maxGrade * 600; // Scale grades to fit in array visualizer container

    outputStr += "<div style=\"height:".concat(divHeight, "px\"></div>");
  }

  containerEl.innerHTML = outputStr;
}