// How can you determine whether a given string ends with an exclamation mark?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/*
** We can use the .endsWith() method to determine if a string ends with a !.
** This method returns true if the string ends with the specified characters.
 */
let exclamationEnd = str => str.endsWith('!');


console.log(exclamationEnd(str1));
console.log(exclamationEnd(str2));