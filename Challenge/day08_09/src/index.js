const result = document.querySelector(".result");
const gameForm = document.querySelector(".game-form");

function play(event) {
  event.preventDefault();
  const maxNum = document.querySelector(".maxNum");
  const max = parseInt(maxNum.value, 10) + 1;
  const number = Math.floor(Math.random() * max);
  const userGuess = parseInt(document.querySelector(".num").value, 10);

  result.innerHTML = `You chose: ${userGuess}, the machine chose: ${number}.<br/>
  <strong>${number === userGuess ? "You won!" : "You lost!"}</strong>`;
}

gameForm.addEventListener("submit", play);
