let x0;
console.log(x0);
console.log(typeof x0);

let x1 = 9;
console.log(x);
console.log(typeof x);

let x2 = null;
console.log(x);

let x3 = null;
let y3;
console.log(x == y);

let x4 = null;
let y4;
console.log(x === y);

let x5 = 10;
function a5() {
  x5 = x5 + 5;
}
function b5() {
  console.log(x5);
}
a5();
b5();

let x6 = undefined;
console.log(x6);

function a7() {
  let x7 = 10;
}
function b7() {
  console.log(x7); // not defined Error
}
a7();
b7();

let x8 = 10;
function a8() {
  x8 = x8 + 5;
}
function b8() {
  console.log(x8); // 15
}
a8();
b8();

console.log(y9); // undefined
var x9;

console.log(x10); // undefined
var x10 = 9;

let x11 = 9;
{
  let x11 = 8;
  console.log(x11); // 8
}
console.log(x11); // 9

console.log(x12); // ReferenceError
let x12;

var a = Number;
console.log(a('1')); // 1
var b = a('1');
console.log(typeof b); // number
