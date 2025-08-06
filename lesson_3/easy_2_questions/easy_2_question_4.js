// Starting with the string:
let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.

let prefix = "Four score and ";

// We can use string concatenation.
let stringConcatenation = prefix + " " + famousWords;

// WE can also use the `concat` method.
let concatMethod = prefix.concat(" ", famousWords);

console.log(stringConcatenation); // "Four score and seven years ago..."
console.log(concatMethod); // "Four score and seven years ago..."