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
  alert(msg);
  console.log(msg);
}

sendMessage("HELLO WORLD");
let mesajGonder = new (function(msg) {
  console.log(msg);
})();

mesajGonder("msgsgsggs");

function doNothing() {
  return;
}
doNothing();
