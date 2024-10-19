let rounds = 0;
let stayWins = 0;
let switchWins = 0;
let intervalId;

function startSim() {
  document.querySelector("#start-button").style.display = 'none';
  document.querySelector("#stop-button").style.display = 'block';
  
  intervalId = setInterval(montyHall, 1);
}
function pauseSim() {
  document.querySelector("#stop-button").style.display = 'none';
  document.querySelector("#start-button").style.display = 'block';
  
  clearInterval(intervalId);
}

function montyHall() {  
  const winningDoor = Math.floor(Math.random() * (3));
  const playerPick = Math.floor(Math.random() * (3))
  
  if (playerPick === winningDoor) {
    stayWins++
  } else {
    switchWins++
  }
  rounds++
  
  setUI()
}

function setUI() {
  // Set rounds texts
  document.querySelector("#stay-rounds").innerHTML = `Rounds: ${rounds}`;
  document.querySelector("#switch-rounds").innerHTML = `Rounds: ${rounds}`;
  
  // Set wins texts
  document.querySelector("#stay-wins").innerHTML = `Wins: ${stayWins}`;
  document.querySelector("#switch-wins").innerHTML = `Wins: ${switchWins}`;
  
  // Set losses texts
  document.querySelector("#stay-losses").innerHTML = `Losses: ${rounds - stayWins}`;
  document.querySelector("#switch-losses").innerHTML = `Losses: ${rounds - switchWins}`;
  
  // Set percentage texts
  document.querySelector("#stay-percentage").innerHTML = `Percentage: ${(stayWins / rounds * 100).toFixed(2)}%`;
  document.querySelector("#switch-percentage").innerHTML = `Percentage: ${(switchWins / rounds * 100).toFixed(2)}%`;
}