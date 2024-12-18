
let firstNum = 0, secondNum = 0;
let state = 0;
let operator_flag=-1;  // 0->add  , 1->subtract  , 2->mul  , 3->div
let inf=0;

document.getElementById('display').innerText = "0";


function evaluate(){
    let ans=0;
    console.log("eval");
    if(operator_flag==0){
        ans=firstNum+secondNum;
        firstNum=ans;
        secondNum=0;
    }
    if(operator_flag==1){
        ans=firstNum-secondNum;
        firstNum=ans;
        secondNum=0;
    }
    if(operator_flag==2){
        ans=firstNum*secondNum;
        firstNum=ans;
        secondNum=0;
    }
    if(operator_flag==3){
        if(secondNum!==0){
        ans=firstNum/secondNum;
        firstNum=ans;
        secondNum=0;
        }
        else{
            console.log("@");
            ans=firstNum/secondNum;
            inf=1;
        }
    }
    if(inf==0){
    document.getElementById('display').innerText = Math.round(ans*100)/100;
    }
    else{
        inf=0;
        document.getElementById('display').innerText ="INFINITE...........";
        operator_flag = -1;
            state = 0;
            firstNum = 0, secondNum = 0;
    }
    state=2;
}


    console.log("hell");
    const num1 = document.querySelector("#one");
    num1.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 1;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 1;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num2 = document.querySelector("#two");
    num2.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 2;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 2;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num3 = document.querySelector("#three");
    num3.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 3;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 3;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num4 = document.querySelector("#four");
    num4.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 4;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 4;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num5 = document.querySelector("#five");
    num5.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 5;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 5;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num6 = document.querySelector("#six");
    num6.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 6;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 6;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num7 = document.querySelector("#seven");
    num7.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 7;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 7;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num8 = document.querySelector("#eight");
    num8.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 8;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 8;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num9 = document.querySelector("#nine");
    num9.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 9;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 9;
        console.log(secondNum);
        document.getElementById('display').innerText = secondNum;
        }
    });
    const num0 = document.querySelector("#zero");
    num0.addEventListener("click", () => {
        if (state === 0 || state === 1) {
            state = 1;
        firstNum = firstNum * 10 + 0;
        console.log(firstNum);
        document.getElementById('display').innerText = firstNum;
        }
        if(state===2  || state===3){
            state = 3;
        secondNum = secondNum * 10 + 0;
        console.log(secondNum);
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
    });

    const output=document.querySelector('#output');
    output.addEventListener("click",()=>{
        if(state===3){
            evaluate();
            operator_flag = -1;
            state = 0;
            firstNum = 0, secondNum = 0;
            }
    });

const clear=document.querySelector('#clear');
clear.addEventListener("click",()=>{
    operator_flag = -1;
            state = 0;
            firstNum = 0, secondNum = 0;
            document.getElementById('display').innerText = "0";

});

const del=document.querySelector('#delete');
del.addEventListener("click",()=>{
    if(state===1){
        firstNum-=firstNum%10;
        firstNum/=10;
        document.getElementById('display').innerText =firstNum;
    }
    if(state===3){
        secondNum-=secondNum%10;
        secondNum/=10;
        document.getElementById('display').innerText =secondNum;
    }
})