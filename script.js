
let firstNum = 0, secondNum = 0;
let state = 0;
let operator_flag = -1;  // 0->add  , 1->subtract  , 2->mul  , 3->div
let inf = 0;
let dec = 10;

document.getElementById('display').innerText = "0";


function evaluate() {
    let ans = 0;
    if (operator_flag === 0) {
        ans = firstNum + secondNum;
        firstNum = ans;
        secondNum = 0;
    }
    if (operator_flag === 1) {
        ans = firstNum - secondNum;
        firstNum = ans;
        secondNum = 0;
    }
    if (operator_flag === 2) {
        ans = firstNum * secondNum;
        firstNum = ans;
        secondNum = 0;
    }
    if (operator_flag === 3) {
        if (secondNum !== 0) {
            ans = firstNum / secondNum;
            firstNum = ans;
            secondNum = 0;
        }
        else {
            ans = firstNum / secondNum;
            inf = 1;
        }
    }
    if (inf === 0) {
        document.getElementById('display').innerText = Math.round(ans * 100) / 100;
    }
    else {
        inf = 0;
        document.getElementById('display').innerText = "INFINITE...........";
        operator_flag = -1;
        state = 0;
        firstNum = 0, secondNum = 0;
    }
    dec = 10;
    state = 2;
}

const num1 = document.querySelector("#one");
num1.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 1;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 1;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 1 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 1 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num2 = document.querySelector("#two");
num2.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 2;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 2;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 2 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 2 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num3 = document.querySelector("#three");
num3.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 3;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 3;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 3 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 3 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num4 = document.querySelector("#four");
num4.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 4;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 4;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 4 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 4 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num5 = document.querySelector("#five");
num5.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 5;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 5;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 5 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 5 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num6 = document.querySelector("#six");
num6.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 6;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 6;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 6 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 6 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num7 = document.querySelector("#seven");
num7.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 7;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 7;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 7 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 7 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num8 = document.querySelector("#eight");
num8.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 8;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 8;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 8 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 8 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num9 = document.querySelector("#nine");
num9.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 9;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 9;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        firstNum = firstNum + 9 / dec;
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        secondNum = secondNum + 9 / dec;
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});
const num0 = document.querySelector("#zero");
num0.addEventListener("click", () => {
    if (state === 0 || state === 1) {
        state = 1;
        firstNum = firstNum * 10 + 0;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 2 || state === 3) {
        state = 3;
        secondNum = secondNum * 10 + 0;
        document.getElementById('display').innerText = secondNum;
    }
    if (state === 12) {
        dec *= 10;
        document.getElementById('display').innerText = firstNum;
    }
    if (state === 13) {
        dec *= 10;
        document.getElementById('display').innerText = secondNum;
    }
});



const add = document.querySelector('#add');
add.addEventListener("click", () => {
    if (state === 1) {
        console.log("hi");
        operator_flag = 0;
        state = 2;
    }
    if (state === 3) {
        evaluate();
        operator_flag = 0;
        state = 2;
    }
    if (state === 12 || state === 13) {
        state = 2;
        dec = 10;
        operator_flag = 0;
        if (state === 13)
            evaluate();
    }
});
const subtract = document.querySelector('#subtract');
subtract.addEventListener("click", () => {
    if (state === 1) {
        operator_flag = 1;
        state = 2;
    }
    if (state === 3) {
        evaluate();
        operator_flag = 1;
        state = 2;
    }
    if (state === 12 || state === 13) {
        dec = 10;
        state = 2;
        operator_flag = 1;
        if (state === 13)
            evaluate();
    }
});
const multiply = document.querySelector('#multiply');
multiply.addEventListener("click", () => {
    if (state === 1) {
        operator_flag = 2;
        state = 2;
    }
    if (state === 3) {
        evaluate();
        operator_flag = 2;
        state = 2;
    }
    if (state === 12 || state === 13) {
        dec = 10;
        state = 2;
        operator_flag = 2;
        if (state === 13)
            evaluate();
    }
});
const divide = document.querySelector('#divide');
divide.addEventListener("click", () => {
    if (state === 1) {
        operator_flag = 3;
        state = 2;
    }
    if (state === 3) {
        evaluate();
        operator_flag = 3;
        state = 2;
    }
    if (state === 12 || state === 13) {
        dec = 10;
        state = 2;
        operator_flag = 3;
        if (state === 13)
            evaluate()
    }
});

const output = document.querySelector('#output');
output.addEventListener("click", () => {
    if (state === 3) {
        evaluate();
        operator_flag = -1;
        state = 0;
        firstNum = 0, secondNum = 0;
    }
    if (state === 13) {
        evaluate();
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    operator_flag = -1;
    state = 0;
    firstNum = 0, secondNum = 0;
    document.getElementById('display').innerText = "0";
    dec = 10;
});

const del = document.querySelector('#delete');
del.addEventListener("click", () => {
    if (state === 1) {
        firstNum -= firstNum % 10;
        firstNum /= 10;
        document.getElementById('display').innerText = firstNum;
        if (dec != 10) dec /= 10;
    }
    if (state === 3) {
        secondNum -= secondNum % 10;
        secondNum /= 10;
        document.getElementById('display').innerText = secondNum;
        if (dec != 10) dec /= 10;
    }
});

const dot = document.querySelector('#dot');
dot.addEventListener("click", () => {
    if (state === 1) {
        state = 12;
        document.getElementById('display').innerText = firstNum + ".";
    }
    if (state === 3) {
        state = 13;
        document.getElementById('display').innerText = secondNum + ".";
    }
})