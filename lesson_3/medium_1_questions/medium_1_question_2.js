/*
** Starting with the string:
**
** let munstersDescription = "The Munsters are creepy and spooky.";
**
** Return a new string that swaps the case of all of the letters:
**
** `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
*/

let munstersDescription = "The Munsters are creepy and spooky.";

/*
** We first use the .split() method to convert the string into an array.
** Next we use the .map() method to iterate over each character.
** Inside of .map(), we check if the character is uppercase or lowercase.
** Each character swaps cases using the .toUpperCase() and .toLowerCase() 
** methods.
** Finally, we use the .join() method to concatenate the array back into
** a string.
*/

console.log(munstersDescription
  .split("")
  .map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join('')
)