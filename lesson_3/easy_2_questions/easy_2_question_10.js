/*
** Write a one-line expression to count the number of lower-case t characters 
** in each of the following strings:
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// We use the .split() method to turn the string into an array of characters.
let tCount1 = statement1.split('')
  // We then use the .filter() method to keep only the 't' characters.
  .filter(char => char === 't')
  // Finally, we use the .length property to count them.
  .length;

let tCount2 = statement2.split('').filter(char => char === 't').length;

console.log(tCount1);
console.log(tCount2);