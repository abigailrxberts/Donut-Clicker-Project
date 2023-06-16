let autoClickerCost = 100;
let donutCount = 0;
let autoClickerCount = 0;
let intervalId;
let intervalId_array = []

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

    intervalId = setInterval((x) => {
        donutCount++;
        updateDisplay();
    }, 1000);

    intervalId_array.push(intervalId);
    
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('donut-display').textContent = donutCount;
    document.getElementById('auto-display').textContent = autoClickerCount;
    document.getElementById('auto-cost').textContent = autoClickerCost;

    if (donutCount >= autoClickerCost) {
        document.getElementById('autoBtn').disabled = false;
        autoBtn.style.backgroundColor = '#fee6e3';
        autoBtn.style.cursor = 'pointer';
    } else {
        document.getElementById('autoBtn').disabled = true;
        autoBtn.style.backgroundColor = 'grey';
        autoBtn.style.cursor = 'not-allowed';
    }
}


document.getElementById('resetBtn').addEventListener('click', resetGame);

function resetGame() {
    autoClickerCost = 100;
    donutCount = 0;
    autoClickerCount = 0;

    for (var i = 0; i < intervalId_array.length; i++) {
        clearInterval(intervalId_array[i]);
    }

    updateDisplay();
}