// array of names
let names = ["Flash", "Dimes", "The Prez", "Che", "Splash", "Sparkles"];

// Event Listener for random username option
const randomUser = document.getElementById("rand"); // random nickname button
randomUser.addEventListener("click", chooseRandomNickName);

function chooseRandomNickName() {
  // gets first and last name value
  // (have to put it in both functions because we want value on click)
  let input1 = document.getElementById("first").value;
  let input2 = document.getElementById("last").value;

  // to show on HTML
  let showNickName = document.getElementById("showNickName");

  // Make sure it is cleared
  showNickName.innerHTML = "";

  if (input1 === "" || input2 === "") {
    alert("Input is not filled in");
  } else {
    index = Math.floor(Math.random() * names.length);
    showNickName.innerHTML = `${input1} "${names[index]}" ${input2}`;
  }
}

// Event Listener for all usernames option
const allUser = document.getElementById("all"); // all nicknames button
allUser.addEventListener("click", chooseAllNickNames);

// function for all usernames

function chooseAllNickNames() {
  // gets first and last name value
  // (have to put it in both functions because we want value on click)
  let input1 = document.getElementById("first").value;
  let input2 = document.getElementById("last").value;

  // to show on HTML
  let showNickName = document.getElementById("showNickName");

  // Make sure it is cleared
  showNickName.innerHTML = "";

  if (input1 === "" || input2 === "") {
    alert("Input is not filled in");
  } else {
    for (let i = 0; i < names.length; i++) {
      showNickName.innerHTML += `${input1}  "${names[i]}"  ${input2} <br />`;
    }
  }
}
