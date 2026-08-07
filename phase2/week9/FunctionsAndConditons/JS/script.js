// Questions on functions
// ********************

/*
Question 1
● Define a simple function named myFirst that prints the word "Hello" on the console
○ First define the function
○ Then call the function
*/

/*
Question 2

● Define a function called mySecond that takes a parameter and prints the parameter on
console
○ Feel free to give any value as a parameter in your function
*/

/*
Question 3
● Define a function called myThird that takes a parameter and prints the parameter on the
console. But, it uses mySecond function to print the parameter on the console
*/

/*
Question 4
● Write a function named myFourth that takes an array as a parameter and prints only the first
value of the array on the console.
*/

/*
Question 5
● Write a function named myFifth that takes an array with two numbers in it as a parameter and
prints the sum of the two numbers on console
*/


// const myFifth = (arr) => {
//   if (!Array.isArray(arr)){
//     return "Please Provide an Array"
//   }
//   return arr[0] + arr[1];
// }
// console.log(myFifth(1,2));

/*
Question 6
● Write a function that takes an integer minutes and converts it to seconds.
○ https://edabit.com/challenge/8q54MKnRrm89pSLmW
*/

// const covertToSecond = (minute) =>{
// return (typeof minute !== "number" || Number.isNaN(minute) || minute <= 0)? "please Enter a positive number"
// :(minute*60);
// }
// console.log(covertToSecond(2));

/*
Question 7
● Create a function that takes a number as a parameter, increments the number by +1 and
returns the result.
○ https://edabit.com/challenge/NAQhEoxbofPidLxm9
*/

/*
Question 7
● Create a function that takes a number as a parameter, increments the number by +1 and
returns the result.
○ https://edabit.com/challenge/NAQhEoxbofPidLxm9
*/

/*
Question 9
● Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
farmer wants to know the total number of legs and not the total number of animals.
○ https://edabit.com/challenge/8Qg78sf5SNDEANKti
*/
// let legsOfAnimals = (chickens, cows, pigs) =>{
//   if (typeof()){

//   }
// }
/*
Question 10 (not from edabit.com)
● Create a function that takes an array containing only TWO numbers as a parameter and returns
a value that is 3 times the first element of the array.
*/

// Questions on Conditional statements and - practice exercise
// ****************************************************

/*
Question 11
● Create a function that returns true when num1 is equal to num2; otherwise return false.
○ https://edabit.com/challenge/QSnaSH5S3oxZkwcNc
*/

/*
Question 12
● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false.
○ https://edabit.com/challenge/qMr6wYGr6NaXAPQGF
*/
const isDivisble = ()
/*
Question 13
● Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers.
○ https://edabit.com/challenge/kuzB5CMXiKDEYKXAP
*/
function isEvenOrOdd(num){
  return !Number.isFinite(num)? "Please Enter a Valid number"
  :num%2 !== 0? "The number is odd"
  :"The Number is Even";
}
console.log(isEvenOrOdd(1));
/*
Question 14
● Create a function that returns
○ “Invalid score” if score is above 100 or score is a negative number
○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
○ “Grade C” for any score below 79
*/

// let gradeChecker= score => 
//    typeof score !== "number" || Number.isNaN(score)
//     ? "please Enter only a valid Number between 0-100"
//     : score > 100 || score < 0
//       ? "Invalid score"
//       : score >= 90
//         ? "Grade A"
//         : score >= 80 
//           ? "Grade B"
//           : "Grade C";


// console.log(gradeChecker(91));