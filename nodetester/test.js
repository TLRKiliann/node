let mod1 = require("module1.js");

console.log("Hello Node !");

let i = 0;

while (i <= 5) {
	console.log("i = ", i += 1)
};

const total = mod1.add(2, 3);
const multiply = mod1.multi(2, 3);

console.log("total = ", total);
console.log("Multiply = ", multiply);
//console.log(mod1);
