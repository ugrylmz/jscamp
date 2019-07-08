// comment in a line
/**
 * comment in a multiple line
 */
"use strict";
console.log(" HEllo world; UTF-8 işç.öüğp new file");
let message34 = "Merhaba Dünya";
console.log(message34);
var message2 = "Hello World";
console.log(message2);

var message = "Hello";
console.log(message + "${message34}");

let name = "John";
let isgreater = 5 << 6;

// embed a variable
console.log("Hello, ${name}!"); // Hello, John!
console.log(isgreater);

let num = "855";

console.log(typeof Number(num));
console.log(typeof parseInt("855"));
console.log(typeof +"555");

let fruit = prompt("Hangi meyveyi seversin", "elma");
let user = new Object();
user = {
  name: "Uğur",
  age: "21",
  isStudent: true,
  url: "https://uguryilmaz.co",
  "Birth Place": "İskenderun",
  [fruit]: 5
};

console.log(user);

user.url = "uguryilmaz.co";

console.log(user);
delete user.age;
console.log(user);

console.log(user);

function sendMessage(msg) {
  //alert(msg);
  console.log(msg);
}

// sendMessage("HELLO WORLD");
// let mesajGonder = new (function(msg) {
//   console.log(msg);
// })();

//mesajGonder("msgsgsggs");

function doNothing() {
  return;
}
console.log(doNothing() === undefined);

console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-5));
console.log(10 ** 4); //10*10*10*10

let counter = 0;
counter++;
console.log(counter);
counter--;
console.log(counter);
++counter;
console.log(counter--);
console.log(counter);
console.log(counter++);
console.log(++counter);
console.log(counter++);

let user2 = {
  Name: "Ugur",
  isAdmin: true,
  isStudent: false
};

if (user2.isAdmin === true && user2.isStudent === false) {
  console.log("message 1st if else");
}

if (user2.isAdmin && user2.isStudent) {
  console.log("message 2nd if else");
}
if (user2.isAdmin || user2.isStudent) {
  console.log("message 3rd if else");
}

var obj = {
  name: "Carrot",
  _for: "Max", // 'for' is a reserved word, use '_for' instead.
  details: {
    color: "orange",
    size: 12
  }
};
console.log(obj);

let arr = []; //or new Array();
arr = ["elma", "armut", "kel mahmut"];
arr.forEach(function(element) {
  console.log(element);
});
arr.push("kavun");
arr.forEach(function(element) {
  console.log(element);
});
arr.pop();

for (let item in arr) {
  console.log(+item + 1 + "." + "item " + arr[item]);
  item++;
}
