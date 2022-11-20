// 🌐 Global element references for passing tests
let testTable = document.querySelectorAll("table");

// 🌐 Global variables for passing tests
let tableCheckPass = false;
let rowCheckPass = false;
let columnCheckPass = false;

// 🧪 click grid tests
function clickGridTests() {
  function ()
}
// 🧪 3x3 grid tests
function gridTests() {
  checkTable();
  checkRows();
  checkColumns();
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
}
