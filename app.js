let playing = false;
let humanPlayingAs;
let computerPlayingAs;
let endBtn = document.getElementById('end-game-btn');
let startBtn = document.getElementById('playing-game');

//characters array
let characters = [rick, morty, jerry, mrMeeseeks];

//Is player playing
if (playing) {
  endBtn.style.display = 'flex';
  startBtn.style.display = 'none';
}

// Starting game and removing start screen
function startGame(player) {
  humanPlayingAs = player;
  randomCharacter('computer');
  endBtn.style.display = 'flex';
  startBtn.style.display = 'none';
}

//generate random character
function randomCharacter(player) {
  //random number between 0 and 4
  let num = Math.floor(Math.random() * 4)
  //set random players based on who is selecting
  if (player == 'computer') {
    humanPlayingAs == characters[num] ? randomCharacter('computer') : computerPlayingAs = characters[num];
  } else if (player == 'human') {
    computerPlayingAs == characters[num] ? randomCharacter('human') : humanPlayingAs = characters[num];
  }
}




//Ending game and returning start screen
function endGame() {
  endBtn.style.display = 'none';
  startBtn.style.display = '';
  humanPlayingAs = '';
  computerPlayingAs = '';
}





