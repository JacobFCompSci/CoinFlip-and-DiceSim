// COIN FLIP SIMULATOR

// HTML variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let dieOutEl = document.getElementById("dieOutput");
let die2OutEl = document.getElementById("dieOutput2");
let roll1 = document.getElementById("one");
let roll2 = document.getElementById("two");
let roll3 = document.getElementById("three");
let roll4 = document.getElementById("four");
let roll5 = document.getElementById("five");
let roll6 = document.getElementById("six");
let secDie1 = document.getElementById("one");
let secDie2 = document.getElementById("two");
let secDie3 = document.getElementById("three");
let secDie4 = document.getElementById("four");
let secDie5 = document.getElementById("five");
let secDie6 = document.getElementById("six");
let totalOut = document.getElementById("totalOut");
// Count Variables
let numHeads = 0;
let numTails = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("roll-die").addEventListener("click", rollDice);
function btnClicked() {
  // Generate a random num
  let randNum = Math.random();

  // Simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src = 'img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src = 'img/tails.png' />";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

function rollDice() {
  let dieNum = Math.random() * (6 - 1 + 1) + 1;
  dieNum = Math.floor(dieNum);

  if (dieNum == 1) {
    dieOutEl.innerHTML =
      "<img src = 'img/1.png' width = '100px' height = '100px'/>";
    num1 = num1 + 1;
    roll1.innerHTML = num1;
  } else if (dieNum == 2) {
    dieOutEl.innerHTML =
      "<img src = 'img/2.png' width = '100px' height = '100px' />";
    num2 = num2 + 1;
    roll2.innerHTML = num2;
  } else if (dieNum == 3) {
    dieOutEl.innerHTML =
      "<img src = 'img/3.png' width = '100px' height = '100px' />";
    num3 = num3 + 1;
    roll3.innerHTML = num3;
  } else if (dieNum == 4) {
    dieOutEl.innerHTML =
      "<img src = 'img/4.png' width = '100px' height = '100px' />";
    num4 = num4 + 1;
    roll4.innerHTML = num4;
  } else if (dieNum == 5) {
    dieOutEl.innerHTML =
      "<img src = 'img/5.png' width = '100px' height = '100px' />";
    num5 = num5 + 1;
    roll5.innerHTML = num5;
  } else {
    dieOutEl.innerHTML =
      "<img src = 'img/6.png' width = '100px' height = '100px' />";
    num6 = num6 + 1;
    roll6.innerHTML = num6;
  }
  let dieNum2 = Math.random() * (6 - 1 + 1) + 1;

  dieNum2 = Math.floor(dieNum2);

  if (dieNum2 == 1) {
    die2OutEl.innerHTML =
      "<img src = 'img/1.png' width = '100px' height = '100px'/>";
    num1 = num1 + 1;
    secDie1.innerHTML = num1;
  } else if (dieNum2 == 2) {
    die2OutEl.innerHTML =
      "<img src = 'img/2.png' width = '100px' height = '100px' />";
    num2 = num2 + 1;
    secDie2.innerHTML = num2;
  } else if (dieNum2 == 3) {
    die2OutEl.innerHTML =
      "<img src = 'img/3.png' width = '100px' height = '100px' />";
    num3 = num3 + 1;
    secDie3.innerHTML = num3;
  } else if (dieNum2 == 4) {
    die2OutEl.innerHTML =
      "<img src = 'img/4.png' width = '100px' height = '100px' />";
    num4 = num4 + 1;
    secDie4.innerHTML = num4;
  } else if (dieNum2 == 5) {
    die2OutEl.innerHTML =
      "<img src = 'img/5.png' width = '100px' height = '100px' />";
    num5 = num5 + 1;
    secDie5.innerHTML = num5;
  } else {
    die2OutEl.innerHTML =
      "<img src = 'img/6.png' width = '100px' height = '100px' />";
    num6 = num6 + 1;
    secDie6.innerHTML = num6;
  }
  let total = dieNum + dieNum2;
  totalOut.innerHTML = total;
}
