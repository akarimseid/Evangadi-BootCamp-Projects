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

// function lowercaseLetters (word){
//     let  lowercaseLetters = "";

//     for(char of word){
//         if (char === char.toUpperCase()){
//             continue;
//         }
//         else {
//           lowercaseLetters += char;
//         }
//     }
//     return lowercaseLetters;
// }
// console.log(lowercaseLetters("Word"));

//create function
//check if the input is an array
//check if arr can be nested inside array 2
//means if arr1 min is greater than array2 min &&
//means array1 max is less than array2 max return true
//else false

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
