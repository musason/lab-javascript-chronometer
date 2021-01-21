const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.getMinutes();
  if (minUni.innerHTML.length == 1) {
    return (minUni.innerHTML = chronometer.currentTime);
  } else {
    return minDec.parentNode.replaceChild(minUni, minDec);
  }
}

function printSeconds() {
  // ... your code goes here
  
  secUni.innerHTML = chronometer.getSeconds()
  if (secUni.innerHTML.length == 1) {
    return (secUni.innerHTML = chronometer.currentTime);
  } else {
    return secDec.parentNode.replaceChild(secUni, secDec);
  }
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  chronometer.startClick(printSeconds)
  
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
});
