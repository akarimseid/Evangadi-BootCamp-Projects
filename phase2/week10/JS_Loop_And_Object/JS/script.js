// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.



// function printTheFirst10(){

//     for (let i = 1; i <= 10; i++){
//         console.log(i);
//     }
// }
// printTheFirst10()
// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// const printNext5Numbers = (number)=> {
//      Number.isFinite(number)? executeLoop(number)
//      : console.log("Error: Please Enter a valid number")
    
//      function executeLoop(validNumber) {
// for (let i = number+1; i <= number+5; i++ ){
//         console.log(i);
//      }
//      }
     

// }
// printNext5Numbers(0)


// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// function printSum(num){
//    let total = 0;
//     for (let i = num+1; i<= num+10; i++){
//      total+= i;
//    }
//    return total;
// }
// console.log(printSum(7))


// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

// function printAllElements(array){
//    if (!Array.isArray(array)) {
//        console.log("please Enter an Array");
//        return;
//    } 
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// for (let num of array){
//     console.log(num);
// }
// }
// printAllElements([1,2,3]);
// printAllElements("23");


// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
// function lengthOfArray(array){
//     if (!Array.isArray(array)) return "please provide an array"
//     return array.length;
// }
// console.log(lengthOfArray([1,"2",true, 3]))


// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0


// function sumOfArray(arr) {
//   if (!Array.isArray(arr)) return "please provide an Array";
//   let index = 0;
//   let sum = 0;
//   while (index < arr.length) {
//     sum += arr[index];
//     index++;
//   }
//   return sum;
// }
// console.log(sumOfArray([1, 2, 3, 1]));


// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
// Questions on built in JavaScript methods
// ***********************************
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method


// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: [
// {
// name: "Abebe",
// age: 34,
// sex: "M"
// },
// {
// name: "Kebede",
// age: 44,
// sex: "M"
// },
// {
// name: "Almaz",
// age: 27,
// sex: "F"
// },
// {
// name: "Challa",
// age: 22,
// sex: "M"
// },
// {
// name: "Chaltu",
// age: 19,
// sex: "F"
// }
// ]
// }
// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change
// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console
// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
// Puzzles
// *******
// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.
// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".
// Question 19: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.