var enteredTime = parseInt(window.prompt("Enter a time in seconds for countdown"));

if(!isNaN(enteredTime)) {
  var current = enteredTime;
  var stopTimer = setInterval(Timer, 1000);
}

function Timer() {
	if(current == 0) {
    clearInterval(stopTimer);  
  }
  document.getElementById('timer').innerText = current--;
}