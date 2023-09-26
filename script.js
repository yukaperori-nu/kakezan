const startButton = document.getElementById('startButton');
const numberBox = document.getElementById('numberBox');
let isRunning = false;
let interval;
let count = 0;
let num1, num2, result;

startButton.addEventListener('click', () => {
    if (!isRunning) {
        startButton.textContent = 'ストップ';
        isRunning = true;
        count = 0;
        interval = setInterval(updateNumber, 600);
    } else {
        stopGame();
    }
});

function updateNumber() {
    if (count < 50) {
        if (count % 2 === 0) {
            // 偶数回の更新では掛け算式を表示
            num1 = Math.floor(Math.random() * 9) + 1; // 1 から 9 のランダムな数
            num2 = Math.floor(Math.random() * 9) + 1; // 1 から 9 のランダムな数
            result = num1 * num2;
            numberBox.textContent = `${num1} x ${num2}`;
        } else {
            // 奇数回の更新では答えを表示
            numberBox.textContent = `${result}`;
        }
        count++;
    } else {
        stopGame();
    }
}

function stopGame() {
    clearInterval(interval);
    isRunning = false;
    startButton.textContent = 'スタート';
    numberBox.textContent = '開始';
}
