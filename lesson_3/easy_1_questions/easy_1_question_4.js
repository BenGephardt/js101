/* Using the following string, create a new string that contains all 
** lowercase letters except for the first character, which should be 
** capitalized. (See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";

/* We can use method chaining to get the first character with .charAt(0),
** convert it to uppercase with .toUpperCase() method, then concatenate 
** it with the rest of of the string that uses the .slice() method to 
** get the rest of the string and the .toLowerCase() method to convert 
** that to lowercase.
*/

let formattedDescription = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.slice(1).toLowerCase();

console.log(formattedDescription); // The munsters are creepy and spooky.