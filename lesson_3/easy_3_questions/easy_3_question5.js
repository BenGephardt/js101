/*
** The following function unnecessarily uses two return statements to return 
** boolean values. Can you rewrite this function so it only has one return 
** statement and does not explicitly use either true or false?
*/

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

// We can return a value of a conditional expression directly
const isColorValid1 = color => color === "blue" || color === "green";

// We can also use the .ncludes() method
const isColorValid2 = color => ["blue", "green"].includes(color);