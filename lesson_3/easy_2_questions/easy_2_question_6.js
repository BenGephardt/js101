// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

/* Create a new array that contains all of the above values, but in an 
** un-nested format
*/

// We can use the `flat` method to flatten the nested arrays.
let flatFlintstones = flintstones.flat();

console.log(flatFlintstones);