let arr = 
[
  {"num1": 15, "num2": 7, "op": "+", "ans": 22, "sol": true},
  {"num1": 30, "num2": 18, "op": "-", "ans": 12, "sol": true},
  {"num1": 8, "num2": 9, "op": "*", "ans": 72, "sol": true},
  {"num1": 48, "num2": 4, "op": "/", "ans": 12, "sol": true},
  {"num1": 20, "num2": 5, "op": "+", "ans": 25, "sol": true},
  {"num1": 10, "num2": 3, "op": "-", "ans": 7, "sol": true},
  {"num1": 36, "num2": 9, "op": "/", "ans": 4, "sol": true},
  {"num1": 25, "num2": 4, "op": "*", "ans": 100, "sol": true},
  {"num1": 17, "num2": 8, "op": "+", "ans": 25, "sol": true},
  {"num1": 40, "num2": 6, "op": "-", "ans": 34, "sol": true},
  {"num1": 14, "num2": 6, "op": "*", "ans": 84, "sol": true},
  {"num1": 55, "num2": 10, "op": "/", "ans": 5, "sol": false},
  {"num1": 28, "num2": 14, "op": "+", "ans": 41, "sol": false},
  {"num1": 50, "num2": 26, "op": "-", "ans": 28, "sol": false},
  {"num1": 9, "num2": 12, "op": "*", "ans": 118, "sol": false},
  {"num1": 63, "num2": 7, "op": "/", "ans": 9, "sol": true},
  {"num1": 32, "num2": 16, "op": "+", "ans": 58, "sol": false},
  {"num1": 72, "num2": 30, "op": "-", "ans": 32, "sol": false},
  {"num1": 25, "num2": 5, "op": "*", "ans": 115, "sol": false},
  {"num1": 81, "num2": 9, "op": "/", "ans": 8, "sol": false},
  {"num1": 16, "num2": 4, "op": "+", "ans": 64, "sol": true},
  {"num1": 42, "num2": 7, "op": "-", "ans": 35, "sol": true},
  {"num1": 6, "num2": 3, "op": "*", "ans": 18, "sol": true},
  {"num1": 63, "num2": 7, "op": "/", "ans": 9, "sol": true},
  {"num1": 18, "num2": 2, "op": "+", "ans": 20, "sol": true},
  {"num1": 40, "num2": 5, "op": "-", "ans": 35, "sol": true},
  {"num1": 9, "num2": 3, "op": "*", "ans": 27, "sol": true},
  {"num1": 49, "num2": 7, "op": "/", "ans": 7, "sol": true},
  {"num1": 15, "num2": 8, "op": "+", "ans": 23, "sol": true},
  {"num1": 25, "num2": 4, "op": "-", "ans": 21, "sol": true},
  {"num1": 10, "num2": 2, "op": "*", "ans": 20, "sol": true},
  {"num1": 45, "num2": 9, "op": "/", "ans": 5, "sol": true},
  {"num1": 17, "num2": 6, "op": "+", "ans": 23, "sol": true},
  {"num1": 33, "num2": 11, "op": "-", "ans": 21, "sol": false},
  {"num1": 8, "num2": 8, "op": "*", "ans": 62, "sol": false},
  {"num1": 72, "num2": 9, "op": "/", "ans": 8, "sol": true},
  {"num1": 29, "num2": 7, "op": "+", "ans": 35, "sol": false},
  {"num1": 64, "num2": 16, "op": "-", "ans": 38, "sol": false},
  {"num1": 12, "num2": 6, "op": "*", "ans": 82, "sol": false},
  {"num1": 54, "num2": 6, "op": "/", "ans": 8, "sol": false},
  {"num1": 18, "num2": 13, "op": "+", "ans": 33, "sol": false},
  {"num1": 35, "num2": 14, "op": "-", "ans": 23, "sol": false},
  {"num1": 7, "num2": 3, "op": "*", "ans": 22, "sol": false},
  {"num1": 63, "num2": 7, "op": "/", "ans": 9, "sol": true},
  {"num1": 19, "num2": 5, "op": "+", "ans": 24, "sol": true},
  {"num1": 28, "num2": 8, "op": "-", "ans": 20, "sol": true},
  {"num1": 9, "num2": 3, "op": "*", "ans": 27, "sol": true},
  {"num1": 45, "num2": 5, "op": "/", "ans": 9, "sol": true},
  {"num1": 16, "num2": 6, "op": "+", "ans": 22, "sol": true},
  {"num1": 32, "num2": 8, "op": "-", "ans": 24, "sol": true},
  {"num1": 7, "num2": 3, "op": "*", "ans": 21, "sol": true},
  {"num1": 56, "num2": 7, "op": "/", "ans": 8, "sol": true},
  {"num1": 18, "num2": 3, "op": "+", "ans": 21, "sol": true},
  {"num1": 36, "num2": 6, "op": "-", "ans": 30, "sol": true},
  {"num1": 8, "num2": 4, "op": "*", "ans": 32, "sol": true},
  {"num1": 63, "num2": 7, "op": "/", "ans": 9, "sol": true}
]
let wid = 100;
let score = 0;

function refresh(){
  location.reload();
}
let rand = Math.floor( Math.random()*arr.length );
let ques = document.querySelector('.question');
let ans = document.querySelector('.answer');
let trBtn = document.querySelector('.true-btn');
let falBtn = document.querySelector('.false-btn');
let scores = document.querySelector('.score');
let div1 = document.querySelector('.row1');
let div2 = document.querySelector('.row2');
ques.textContent = `${arr[rand].num1}${arr[rand].op}${arr[rand].num2}`;
ans.textContent = `=${arr[rand].ans}`;
scores.textContent = `Scores: ${score}`;

let id = setInterval(()=> {
  document.querySelector(".time-moving").style.width = `${wid}%`; 
  wid = wid - 0.1;
  if(Math.round(wid) == 0){
    div1.innerHTML = `<h1>Score: ${score}</h1>`;
    div2.innerHTML = `<button class="true-btn" onclick="refresh();"><img width="80px" src="images/refresh.png" alt="right-img"></button>`;
    clearInterval(id);
  }
},10);
trBtn.addEventListener('click',() => {
  let result;
    if (arr[rand].op === "+") {
        result = arr[rand].num1 + arr[rand].num2;
    } else if (arr[rand].op === "-") {
        result = arr[rand].num1 - arr[rand].num2;
    } else if (arr[rand].op === "*") {
        result = arr[rand].num1 * arr[rand].num2;
    } else if (arr[rand].op === "/") {
        result = arr[rand].num1 / arr[rand].num2;
    } else {
        // Handle invalid operator case
        console.error("Invalid operator");
        return NaN;
    }
    if(arr[rand].ans == result){
      score++;
      wid = wid + 20;
    }else {
      wid = wid - 40;
    }
  
  rand = Math.floor( Math.random()*arr.length );
  ques.textContent = `${arr[rand].num1}${arr[rand].op}${arr[rand].num2}`;
  ans.textContent = `=${arr[rand].ans}`;
  scores.textContent = `Score: ${score}`;

})
falBtn.addEventListener('click',() => {
  let result;
    if (arr[rand].op === "+") {
        result = arr[rand].num1 + arr[rand].num2;
    } else if (arr[rand].op === "-") {
        result = arr[rand].num1 -  arr[rand].num2;
    } else if (arr[rand].op === "*") {
        result = arr[rand].num1 * arr[rand].num2;
    } else if (arr[rand].op === "/") {
        result = arr[rand].num1 / arr[rand].num2;
    } else {
        // Handle invalid operator case
        console.error("Invalid operator");
        return NaN;
    }
  if(arr[rand].ans !== result){
    score++;
    wid = wid + 20;
  }else {
    wid = wid - 40;
  }
  rand = Math.floor( Math.random()*arr.length );
  ques.textContent = `${arr[rand].num1}${arr[rand].op}${arr[rand].num2}`;
  ans.textContent = `=${arr[rand].ans}`;
  scores.textContent = `Score: ${score}`;
})


