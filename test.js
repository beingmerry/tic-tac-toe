// 🌐 Global element references for passing tests
const testTable = document.querySelectorAll("table");
const testRows  = document.querySelectorAll("tr");

// 🌐 Global variables for passing tests
let tableCheckPass  = false;
let rowCheckPass    = false;
let columnCheckPass = false;

function checkTable() {
  if (testTable.length !== 1) {
    console.log("🚫 Table test failed: 1 Table element needed");
  } else {
    console.log("✅ Table test passed! 1 Table element found");
    tableCheckPass = true;
  }
}
function checkRows() {
  let testPassed = false;
  try{testPassed = (testTable[0].rows.length === 3)
	} catch(e){testPassed = false
	} finally {
		if (testPassed) {
			console.log("✅ Rows test passed! 3 tr (rows) elements found");
			rowCheckPass = true;
		} else {
			console.log("🚫 Rows test failed: 3 tr elements needed");
			rowCheckPass = false;
		}
  }
}
function checkColumns() {
  for (let i = 0; i < 3; i++) {
    let testPassed = false;
    try {testPassed = testTable[0].rows[i].cells.length === 3
		} catch (e) {
      testPassed = false;
    } finally {
      if (testPassed) {
				console.log(`✅ Row ${i + 1} check passed! 3 td (columns) in each row found`);
        columnCheckPass = true;
      } else {
				console.log(`🚫 Row ${i + 1} check failed: 3 td (columns) elements needed`);
        columnCheckPass = false;
      }
    }
  }
}
