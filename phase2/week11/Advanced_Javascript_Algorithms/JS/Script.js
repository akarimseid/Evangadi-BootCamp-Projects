//what is Hiding amongst the crowd
//Wanted word is in lowercase
//declaring a variable tha store all lowercase letters
//iterate all over the word
//if i in counter uppercase letter ignore
//push all other  the word to the variable

// function
//let allSmallWords
//for loop iterate all over the string
//if(letter === uppercase) ->continue/ignore
//else push the letter to allSmallWords variable
//return allSmallWords
/*
function lowercaseLetters (word){
    let  lowercaseLetters = "";

    for(char of word){
        if (char === char.toUpperCase()){
            continue;
        }
        else {
          lowercaseLetters += char;
        }
    }
    return lowercaseLetters;
}
console.log(lowercaseLetters("Word"));
*/
//create function
//check if the input is an array
//check if arr can be nested inside array 2
//means if arr1 min is greater than array2 min &&
//means array1 max is less than array2 max return true
//else false

/*
console.log(canNest([7, 2, 3], [8, 4, 5]));
function canNest (array1, array2){
  if (!Array.isArray(array1) || !Array.isArray(array2)){ 
    
    return "Please Provide an Array";
  }
  //sorting the arrays by ascending order
  array1.sort((a,b) => a -b);
  array2.sort((a, b) => a -b);
  if(array1[0] > array2[0] && array1[array1.length-1] < array2[array2.length-1]){
    return true;
  }
  else {
    return false;
  }
}
*/

/*
Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4] */

//create a function
//check if it is an Array if not reject
//if it is Array accept and
//create a loop iterate over the array identify all even numbers in even indexes
//create another empty array which used to display the new arrays
//push even numbers in even indexes to the empty array
//return the new array

// function getOnlyEvens(array) {

//   if (!Array.isArray(array)) {

//     return "Please provide an Array";
//   }

//   else {
//     let newArray = [];

//     for (let i = 0; i < array.length; i += 2) {

//       if (array[i] % 2 === 0) {

//         newArray.push(array[i]);
//       }
//     }
//     return newArray;
//   }
// }
//solve this question using map method or any t
// const OnlyEvens = getOnlyEvens;
// console.log(OnlyEvens([1, 2, 3, 6, 4, 8]));
// console.log(OnlyEvens([0, 1, 2, 3, 4]));
// console.log(OnlyEvens("aa"));

/*
Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32 */

// function convertStrToFloat (str){

//   let result = 0;
//   let isNegative = false;
//   let isDecimal = false;
//   let decimalPlaces = 0;
//   let startIndex = 0;
//   const digits = "0123456789";

//   if (str[0] === "-"){
//     isNegative =  true;
//     startIndex =  1;
//   }

//   else if (str[0] === "+"){
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < str.length; i++){
//      const char = str[i];

//      if (char === "."){

//       if(isDecimal) return NaN;

//       isDecimal = true;
//       continue;
//      }

//      let digitValue = -1;
//      for (let j = 0; j < 10; j++){
        
//       if (digits[j] == char){
//         digitValue = j;
//         break;
//       }
//      }

//      if (digitValue === -1) return NaN;

//      result = (result * 10) + digitValue;

//      if (isDecimal){
//       decimalPlaces++;
//      }

//   }
//   if (isDecimal){
//     let divisor = 1;
//     for (let k = 0; k < decimalPlaces; k++){

//       divisor *= 10;

//     }
//     result = result / divisor;

//   }
//   return isNegative? -result : result;
// }


// function reverseCompare (number){

 

//   if ((number) => Number.isFinite(num) && Number.isInteger(number) && num === 0){
//    return "Please Enter an Integer";
//   }
//   else {
//     let numString = 
//   }
//  let reversedNumber = 0;
//   for (digits of number){

//   }
// }

/*
Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1
*/

/*
Question 4 (Meera array)
● A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6
*/






/*
Question 5 (Dual array)
● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.
*/


/*
Question 6
● Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
*/

function digitalClock(seconds) {
  
       //Notice -> 86400 second in 24 hours

    if (!Number.isInteger(seconds) || seconds <= 0){
      return `${seconds} is not valid Second, Enter a valid Integer`;
    }
    seconds = seconds % 86400;
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    
    return [hours, minutes, secs]
        .map(val => String(val).padStart(2, '0'))
        .join(':');
}


console.log(digitalClock(5025));   // Output: "01:23:45"
console.log(digitalClock(61201));  // Output: "17:00:01"
console.log(digitalClock(87000));  // Output: "00:10:00"
