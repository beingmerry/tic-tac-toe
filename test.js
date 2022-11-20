// 🌐 Global element references for passing tests
let testTable = document.querySelectorAll("table");
let testCells = document.querySelectorAll("td")

// 🌐 Global variables for passing tests
let cellClickPass   = false;
let tableCheckPass  = false;
let rowCheckPass    = false;
let columnCheckPass = false;

// 🧪 click grid tests, building a "visual" click test runner...
function testCellClick(timeBetweenClicks = 500) {
  // 1️⃣ First test pattern for the board, linear click on each cell 1-9
  // Pattern match XOX,OXO,XOX
  const testPattern1 = [ // tests clicks, tests turns (alternating game states?)
    "X", "O", "X", 
    "O", "X", "O", 
    "X", "O", "X",
  ]
  testCells.forEach(cell => {
    setTimeout(() => {
      cell.click() // Click on each cell
      console.log(`clicking Cell ${cell.id}...`)
      if (cell.textContent === testPattern1[cell.id -1]) {
        console.log(`✅ Expected Cell ${cell.id} to match "${testPattern1[cell.id - 1]}" and the value is ${cell.textContent}!`)
        cellClickPass = true
      } else {
        console.log(`🚫 Expected Cell ${cell.id} to match "${testPattern1[cell.id - 1]}" and the value is ${cell.textContent}!`)
        cellClickPass = false
      }
    }, timeBetweenClicks * [cell.id])  // not necessary, but nice for the visual tests
  })
  return "🚩 Starting cell click tests..." 
}
// 🧪 3x3 grid tests
function testGrid(timeBetweenTests = 1000) {
  setTimeout(checkTable, timeBetweenTests * 1) ;
  setTimeout(checkRows, timeBetweenTests * 2);
  setTimeout(checkColumns, timeBetweenTests * 3);
  function checkTable() {
    testTable = document.querySelectorAll("table");
    if (testTable.length !== 1) {
      console.log("🚫 Table test failed: EXACTLY 1 Table element needed");
    } else {
      console.log("✅ Table test passed! EXACTLY 1 Table element found");
      tableCheckPass = true;
    }
  }
  function checkRows() {
    let testPassed = false;
    try {
      testPassed = testTable[0].rows.length === 3;
    } catch (e) {
      testPassed = false;
    } finally {
      if (testPassed) {
        console.log("✅ Rows test passed! EXACTLY 3 tr (rows) elements found");
        rowCheckPass = true;
      } else {
        console.log("🚫 Rows test failed: EXACTLY 3 tr (rows) elements needed");
        rowCheckPass = false;
      }
    }
  }
  function checkColumns() {
    for (let i = 0; i < 3; i++) {
      let testPassed = false;
      try {
        testPassed = testTable[0].rows[i].cells.length === 3;
      } catch (e) {
        testPassed = false;
      } finally {
        if (testPassed) {
          console.log(
            `✅ Row ${
              i + 1
            } check passed! 3 td (cells or columns or data) in each row found`
          );
          columnCheckPass = true;
        } else {
          console.log(
            `🚫 Row ${
              i + 1
            } check failed: 3 td (cells or columns or data) elements needed`
          );
          columnCheckPass = false;
        }
      }
    }
  }
  return "🚩 Starting grid checks tests..."
}
