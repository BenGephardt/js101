/*
** Back in the stone age (before CSS), we used spaces to align things on the 
** screen. If we have a 40-character wide table of Flintstone family members,
** how can we center the following title above the table with spaces?
*/

let title = "Flintstone Family Members";

// First we calculate how mnay spaces to add to the left side.
let padding = Math.floor((40 - title.length) / 2);

/*
** We can use the .padStart() method to add spaces at the start of the string.
** The argument is the total length for the new string:
** original title length plus padding spaces
*/

title = title.padStart(padding + title.length);

console.log(title); // "        Flintstone Family Members"