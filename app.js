let playing = false;
let endBtn = document.getElementById('end-game-btn');
let startBtn = document.getElementById('playing-game');



//Is player playing
if (playing) {
  endBtn.style.display = 'flex';
  startBtn.style.display = 'none';
}

// Starting game and removing start screen
function startGame() {
  endBtn.style.display = 'flex';
  startBtn.style.display = 'none';
}

// Building the player from schema
function buildPlayer() {

}





//Ending game and returning start screen
function endGame() {
  endBtn.style.display = 'none';
  startBtn.style.display = '';
}





