let autoClickerCost = 100;
let donutCount = 0;
let autoClickerCount = 0;

document.getElementById('donutBtn').addEventListener('click', donutClick);
document.getElementById('autoBtn').addEventListener('click', buyAutoClicker);
document.getElementById('autoBtn').disabled = true;

updateDisplay();

function donutClick() {
    donutCount++;
    updateDisplay();
}

function buyAutoClicker() {
    donutCount -= autoClickerCost;
    autoClickerCount++;
    autoClickerCost = Math.round(autoClickerCost * 1.1)

    setInterval((x) => {
        donutCount++;
        updateDisplay();
    }, 1000);

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('donut-display').textContent = donutCount;
    document.getElementById('auto-display').textContent = autoClickerCount;
    document.getElementById('auto-cost').textContent = autoClickerCost;

    if (donutCount >= autoClickerCost) {
        document.getElementById('autoBtn').disabled = false;
    } else {
        document.getElementById('autoBtn').disabled = true;
    }
}

document.getElementById('resetBtn').addEventListener('click', resetGame);

function resetGame() {
    autoClickerCost = 100;
    donutCount = 0;
    autoClickerCount = 0;

    updateDisplay();
}
// autoclicker still clicking when reset. need to find a way to fix this still