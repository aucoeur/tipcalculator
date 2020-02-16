const inputBill = document.getElementById('input-bill')
const inputTip = document.getElementById('input-tip')
const inputPeople = document.getElementById('input-people')
const displayTip = document.getElementById('display-tip')
const displayTotal = document.getElementById('display-total')
const displaySplit = document.getElementById('display-split')

function calcTotal() {
    let bill = parseFloat(inputBill.value)
    let percent = parseInt(inputTip.value)
    let people = parseInt(inputPeople.value)

    let tip = bill * (percent/100)
    let total = bill + tip
    let split = total / people

    displayTip.textContent = tip.toFixed(2)
    displayTotal.textContent = total.toFixed(2)
    displaySplit.textContent = split.toFixed(2)
}

inputBill.addEventListener('change', function(e) {
    calcTotal()
})

inputPeople.addEventListener('change', function(e) {
    calcTotal()
})

inputTip.addEventListener('change', function(e) {
    calcTotal()
})