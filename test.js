const testTable = document.querySelectorAll("table")
const testRows = document.querySelectorAll("tr")

function checkTable() {
    if (testTable.length !== 1) {
        console.log("🚫 Test failed: 1 Table element needed")
    } else {
        console.log("✅ Test passed! 1 Table element found")
    }
}
function checkRows() {
    if (testTable[0].rows.length !== 3) {
        console.log("🚫 Test failed: 3 tr elements needed")
    } else {
        console.log("✅ Test passed! 3 tr elements found")

    }
}
function checkColumns() {
    let columnCheckPass = false
    for (let i = 0; i < testTable[0].rows.length; i++) {
        if (testTable[0].rows[0].cells.length !== 3) {
            console.log("🚫 Test failed: 3 td elements needed")
        } else {
            console.log("✅ Test passed! 3 td elements found")
        }
    }
}