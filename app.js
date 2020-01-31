let playing = false;
let humanPlayingAs;
let computerPlayingAs;
let gameEnd = document.getElementById('end-game-btn');
let gameRunning = document.getElementById('game-running');
let gameStart = document.getElementById('starting-game');
let humanImg = document.getElementById('human-img');
let computerImg = document.getElementById('computer-img');

//character images
let rickImg = 'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-non-toxic-rick-sanchez-18.png';
let jerryImg = 'https://elkgroveses.com/image/262351-full_jerry-jerry-smith-rick-and-morty-png-image-with.png';
let mortyImg = 'https://p1.hiclipart.com/preview/488/858/330/rick-and-morty-hq-resource-morty-smith-png-clipart.jpg';
let mrMeeseeksImg = 'https://w0.pngwave.com/png/348/988/meeseeks-and-destroy-morty-smith-youtube-squanchy-youtube-png-clip-art.png';

//array of actions currently in timeout
let deactiveActions = [];

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
  drawGame();
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
  //set action
  let actionTaken = character.actions[num];
  //deliver action effects
  let computerHealth = Number(computerPlayingAs.health);
  let humanHealth = Number(humanPlayingAs.health);
  //last actions taken
  if (player == 'human' && actionTaken.active == true) {
    computerPlayingAs.health = computerHealth - Number(actionTaken.damage);
    humanPlayingAs.health = humanHealth + Number(actionTaken.defense);
  } else if (player == 'computer' && actionTaken.active == true) {
    humanPlayingAs.health = humanHealth - Number(actionTaken.damage);
    computerPlayingAs.health = computerHealth + Number(actionTaken.defense);
  }
  //setting timeouts
  if (player == 'human') {
    actionTaken.active = false;
    document.getElementById(`action-${num}`).disabled = true;
    document.getElementById(`action-${num}`).style.backgroundColor = 'grey';

    setTimeout(() => {

      actionTaken.active = true;
      document.getElementById(`action-${num}`).disabled = false;
      document.getElementById(`action-${num}`).style.backgroundColor = '';
      drawGame();

    }, actionTaken.timeout)
  }

  drawGame();
}

//Computer takes turn
setInterval(() => {
  let num = Math.floor(Math.random() * 6);
  useAction(num, 'computer');
}, 1500);


//draw game
function drawGame() {
  //draw user controls based on characters abilities
  for (let i = 0; i < humanPlayingAs.actions.length; i++) {
    let elem = `action-${i}`;
    document.getElementById(elem).textContent = humanPlayingAs.actions[i].name;
  }
  //draw characters
  switch (humanPlayingAs.name) {
    case 'Rick Sanchez':
      humanImg.src = rickImg;
      break;
    case 'Jerry Smith':
      humanImg.src = jerryImg;
      break;
    case 'Morty Smith':
      humanImg.src = mortyImg;
      break;
    case 'Mr Meeseeks':
      humanImg.src = mrMeeseeksImg;
      break;
  }
  switch (computerPlayingAs.name) {
    case 'Rick Sanchez':
      computerImg.src = rickImg;
      break;
    case 'Jerry Smith':
      computerImg.src = jerryImg;
      break;
    case 'Morty Smith':
      computerImg.src = mortyImg;
      break;
    case 'Mr Meeseeks':
      computerImg.src = mrMeeseeksImg;
      break;
  }
  //draw user health
  computerPlayingAs.health < 0 ? computerPlayingAs.health = 0 : computerPlayingAs.health > 1200 ? computerPlayingAs.health = 1200 : null;
  humanPlayingAs.health < 0 ? humanPlayingAs.health = 0 : humanPlayingAs.health > 1200 ? humanPlayingAs.health = 1200 : null;

  document.getElementById('computer-health').textContent = computerPlayingAs.health;
  document.getElementById('human-health').textContent = humanPlayingAs.health;

}


//Ending game and returning start screen
function endGame() {
  gameEnd.style.display = 'none';
  gameRunning.style.display = 'none';
  gameStart.style.display = '';
  humanPlayingAs.health = 1200;
  computerPlayingAs.health = 1200;
  humanPlayingAs = '';
  computerPlayingAs = '';
}

drawGame();