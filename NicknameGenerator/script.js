// button grabbers
const randomUser = document.getElementById("rand");
const allUser = document.getElementById("all");

// Event Listener for random username option
randomUser.addEventListener("click", chooseRandomNickName);

// names array
let names = ["Flash", "Dimes", "The Prez", "Che", "Splash", "Sparkles"];

function chooseRandomNickName() {
  // gets first and last name value
  let input1 = document.getElementById("first").value;
  let input2 = document.getElementById("last").value;

  // Shows on HTML
  let showNickName = document.getElementById("showNickName");
  showNickName.innerHTML = ""; // Make sure it is cleared
  // function for random nick name
  index = Math.floor(Math.random() * names.length);
  showNickName.innerHTML = `${input1} "${names[index]}" ${input2}`;
}

// Event Listener for all usernames option
allUser.addEventListener("click", allUserNames);

// function for all usernames
function allUserNames() {
  showNickName.innerHTML = ""; // Make sure it is cleared
  for (let i = 0; i < names.length; i++) {
    let input1 = document.getElementById("first").value;
    let input2 = document.getElementById("last").value;
    showNickName.innerHTML += `${input1}  "${names[i]}"  ${input2} <br />`;
  }
}
