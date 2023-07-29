// javascript
const name = document.querySelector(".name")

// part prices
powerSupplyPrice = 150
motherboardPrice = 190
cpuPrice = 200
ramPrice = 50
coolerPrice = 0
fansPrice = 70
casePrice = 30

// calculate amount remaining
buildTotal = powerSupplyPrice + motherboardPrice + cpuPrice + ramPrice + coolerPrice + fansPrice + casePrice
totalPaid = 490
totalOwed = buildTotal - totalPaid
owedStatement = "You owe me " + totalOwed + "$, hero"

function remainingOwed() {
    // literally just pops up an alert
    alert(owedStatement)
}