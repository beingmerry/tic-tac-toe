// 🌐 Global Variables
const cells = document.querySelectorAll("td");
const instructions = document.querySelector("p")
// 🤹 Tracking Game States
let xTurn = true;
// 1️⃣ Init Called on document loaded
const init = () => {
  initCellHandler();
};
// 💡 Init Event Handlers
const initCellHandler = () => {
  let i = 1;
  cells.forEach((cell) => {
    // debugger
    cell.id = i++;
    cell.addEventListener("click", () => cellHandler(cell));
  });
};
const resetGame = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  instructions.textContent = "Click on the squares to make your mark. Play with a friend! Three in a row, column, or diagonal wins!"
  xTurn = true
}
// 🎯 Declare Cell Handler
const cellHandler = (cell) => {
  const markToPlace = xTurn ? "X" : "O";
  if (cell.textContent === "") {
    cell.textContent = markToPlace;
    if (victoryConditions()) {
      // Run victoryConditions to check for win
      console.log(`${markToPlace} wins!`)
      instructions.textContent = `${markToPlace} wins! Reset game?`;
      const resetButton = document.createElement("button")
      resetButton.textContent = "Reset Game"
      instructions.appendChild(resetButton);
      resetButton.addEventListener("click", resetGame);
    }
    xTurn = !xTurn; // Flip xTurn for next players turn
  }
};
// 🥳 Victory Conditions
const victoryConditions = () => {
  const horizontalWin = horizontalWinCondition(xTurn ? "X" : "O"); // Only check the mark of the current player
  const verticalWin = verticalWinCondition(xTurn ? "X" : "O"); // Only check the mark of the current player
  const diagonalWin = diagonalWinCondition(xTurn ? "X" : "O"); // Only check the mark of the current player
  return (horizontalWin || verticalWin || diagonalWin)
  function horizontalWinCondition(markToCheck = "X") {
    let horizontalWinCheck = false;
    for (let i = 0; i < 3; i++) {
      if (
        cells[i * 3 + 0].textContent === markToCheck && // need to check 0, 3, and 6 (element in array)
        cells[i * 3 + 1].textContent === markToCheck && // need to check 1, 4, and 7
        cells[i * 3 + 2].textContent === markToCheck // need to check 2, 5, and 8
      ) {
        horizontalWinCheck = true;
        return horizontalWinCheck;
      }
    }
    return horizontalWinCheck;
  }
  function verticalWinCondition(markToCheck = "X") {
    let verticalWinCheck = false;
    for (let i = 0; i < 3; i++) {
      if (
        cells[i + 0].textContent === markToCheck && // need to check 0, 1, and 2 (element in array)
        cells[i + 3].textContent === markToCheck && // need to check 3, 4, and 5
        cells[i + 6].textContent === markToCheck // need to check 6, 7, and 8
      ) {
        verticalWinCheck = true;
        return verticalWinCheck;
      }
    }
    return verticalWinCheck;
  }
  function diagonalWinCondition(markToCheck = "X") {
    let diagonaWinCheck = false;
    for (let i = 0; i < 2; i++) {
      if (
        cells[i * 2].textContent === markToCheck &&  // need to check 0, 2
        cells[4].textContent === markToCheck &&      // need to check 4, 4
        cells[8 - i * 2].textContent === markToCheck // need to check 8, 6
      ) {
        diagonaWinCheck = true;
        return diagonaWinCheck;
      }
    }
    return diagonaWinCheck;
  }
};
// ⌛ Call init function when DOM loaded
document.addEventListener("DOMContentLoaded", init);
