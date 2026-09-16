
// 3. Create another module called "myCollector":
// a. Import both functions from "myFirst" and "mySecond" modules inside of your "myCollector" module

const multiplyByTwo = require("./myFirst");
const multiplyByThree = require("./mySecond");
// console.log("Type of multiplyByTwo:", typeof multiplyByTwo, multiplyByTwo);
// console.log(
//   "Type of multiplyByThree:",
//   typeof multiplyByThree,
//   multiplyByThree,`
// );

// b. Pass the value 5 to both functions that are imported from "myFirst" and "mySecond" modules

const resultFirst = multiplyByTwo(5);
const resultSecond = multiplyByThree(5);

// c. Run the "myCollector" module on your terminal to display the outputs on your console
//node myCollector.js

console.log(resultFirst);
console.log(resultSecond);


// 4. While you are in your "myCollector" module:

// a. Write a script inside of your "myCollector" module that passes the number 14 to your "myMultiplier" function that you imported from "myFirst" module and writes the returned value on a file called "results.txt". The result you write on the file should read like this: "The value of 14 when passed through the myMultiplier function is ( )."  
// ■ Hint: You will need to find the core Node module that will allow you to create the “results.txt" file and write the result on this file


// b. Write another script inside of your "myCollector" module that passes the number
// 14 to your "myMultiplier" function that you imported from "mySecond" module
// and writes the returning value on the same file, the "results.txt" on a new line. The
// result you write on the file should read like this:
// "The value of 14 when passed through the myMultiplier function is ( )”.
// ■ Note: Make sure not to replace/remove what you wrote on your
// "results.txt" file previously.
// ■ Note: Also, make sure to add the new result on a new line, right below the
// result written previously.