let mod1 = require("module1.js");
let fs = require("fs");

console.log("Hello Node !");

let i = 0;

while (i <= 5) {
	console.log("i = ", i += 1)
};

//const total = mod1.add(2, 3);
const total = mod1(2, 3);
const multiply = mod1.multi(2, 3);

console.log("total = ", total);
console.log("Multiply = ", multiply);
//console.log(mod1);

//---

let rawData = fs.readFileSync("file.txt");
let data = fs.readFileSync("file.txt", { encoding: "utf-8" });

//For multiple user requests (non-blocking like a server)
//without error null will be returned
let dataMulti = fs.readFile("file.txt", function(error, data) {
	console.log(error, data);
});

console.log("Content of file.txt");
console.log(rawData);
console.log(data);
console.log(dataMulti);

