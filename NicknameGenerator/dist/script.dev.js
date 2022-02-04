"use strict";

// button grabbers
var randomUser = document.getElementById("rand");
var allUser = document.getElementById("all"); // Event Listener for random username option

randomUser.addEventListener("click", chooseRandomNickName); // names array

var names = ["Flash", "Dimes", "The Prez", "Che", "Splash", "Sparkles"];

function chooseRandomNickName() {
  // gets first and last name value
  var input1 = document.getElementById("first").value;
  var input2 = document.getElementById("last").value; // Shows on HTML

  var showNickName = document.getElementById("showNickName");
  showNickName.innerHTML = ""; // Make sure it is cleared
  // function for random nick name

  index = Math.floor(Math.random() * names.length);
  showNickName.innerHTML = "".concat(input1, " \"").concat(names[index], "\" ").concat(input2);
} // Event Listener for all usernames option


allUser.addEventListener("click", allUserNames); // function for all usernames

function allUserNames() {
  showNickName.innerHTML = ""; // Make sure it is cleared

  for (var i = 0; i < names.length; i++) {
    var input1 = document.getElementById("first").value;
    var input2 = document.getElementById("last").value;
    showNickName.innerHTML += "".concat(input1, "  \"").concat(names[i], "\"  ").concat(input2, " <br />");
  }
}