// type conversion = change the datatype of a value to another
//                   (strings, numbers, boolean)

/*let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);
*/

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);  
y = String(y);
z = Boolean(z); 

console.log(x, typeof x);   // output is NaN because it is a string
console.log(y, typeof y);
console.log(z, typeof z);   // output true because it is not empty




const consoleOutput = document.getElementById('consoleOutput');

// 覆寫 console.log 函數
const originalConsoleLog = console.log.bind(console);
console.log = function() {
  const message = Array.from(arguments).join(' '); // 將所有參數連接成一個字串
  originalConsoleLog.apply(console, arguments);
  if (consoleOutput) {
    consoleOutput.innerHTML += message + '<br>';
  }
};

// 您的 JavaScript 程式碼，包含 console.log()
console.log('Hello from JavaScript!');

console.log('Now the type of x after x = Number(x) is：', x);
console.log('Now the type of y after y = String(y) is：', y);
console.log('Now the type of z after z = Boolean(z) is：', z);


let myVariable = 4;
function myFunction() {
  let result = 12 % 5 + 8 / 2 + myVariable ** 2;  // % first
  console.log('函式 myFunction 12 % 5 + 8 / 2 + myVariable ** 2 的結果是：', result);
}

myFunction();