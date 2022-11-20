// ⌛ Call init function when DOM loaded
document.addEventListener("DOMContentLoaded", init);
// 🌐 Global Variables
const cells = document.querySelectorAll("td");
// 1️⃣ Init Called on document loaded
const init = () => {
  initCellHandler();
};
// 💡 Event Handlers
const initCellHandler = () => {
  let i = 1;
  cells.forEach((cell) => {
    cell.id = i++;
    cell.addEventListener("click", (e) => {
      console.log(`${cell.id} clicked`);
    });
  });
};