let playing = false;
let humanPlayingAs;
let computerPlayingAs;
let gameEnd = document.getElementById('end-game-btn');
let gameRunning = document.getElementById('game-running');
let gameStart = document.getElementById('starting-game');

//characters array
let characters = [rick, morty, jerry, mrMeeseeks];

//Is player playing
if (playing) {
  gameEnd.style.display = 'flex';
  gameRunning.style.display = 'flex';
  gameStart.style.display = 'none';
}

// Starting game and removing start screen
function startGame(player) {
  humanPlayingAs = player;
  randomCharacter('computer');
  gameEnd.style.display = 'flex';
  gameRunning.style.display = 'flex';
  gameStart.style.display = 'none';
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

//Use players actions
function useAction(actionName, player) {
  let character;
  let num = Number(actionName);

  player == 'human' ? character = humanPlayingAs : character = computerPlayingAs;

  let actionTaken = character.actions[num];
  console.log(actionTaken)
}


//Ending game and returning start screen
function endGame() {
  gameEnd.style.display = 'none';
  gameRunning.style.display = 'none';
  gameStart.style.display = '';
  humanPlayingAs = '';
  computerPlayingAs = '';
}





