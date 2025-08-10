function convertToNumber(value) {
    const num = Number(value.trim());
    return isNaN(num) ? null : num;
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Không chia được cho 0" : a / b; }
function power(a, b) { return Math.pow(a, b); }
function sqrt(a, b) { return Math.pow(a, 1 / b); }
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return "Giai thừa không hợp lệ";
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function handleCalc() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const operator = document.getElementById("operator").value;
    const resultDiv = document.getElementById("result");

    const val1 = convertToNumber(input1.value);
    const val2 = convertToNumber(input2.value);

    let result;

    if (operator === '!') {
        if (val1 === null) {
            resultDiv.innerText = "Giá trị không hợp lệ";
            return;
        }
        result = factorial(val1);
    } else {
        if (val1 === null || val2 === null) {
            resultDiv.innerText = "Giá trị không hợp lệ";
            return;
        }
        switch (operator) {
            case '+': result = add(val1, val2); break;
            case '-': result = subtract(val1, val2); break;
            case '*': result = multiply(val1, val2); break;
            case '/': result = divide(val1, val2); break;
            case '^': result = power(val1, val2); break;
            case '√': result = sqrt(val1, val2); break;
            default: result = "Phép toán không hỗ trợ";
        }
    }

    resultDiv.innerText = "Kết quả: " + result;
}

document.getElementById("calcBtn").addEventListener("click", handleCalc);
