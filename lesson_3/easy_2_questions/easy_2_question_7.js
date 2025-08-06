// Consider the following object:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
/*
** Create an array from this object that contains only two elements: Barney's name
** and Barney's number: [ 'Barney', 2 ]
*/

// Object.entries(flintstones) converts the object into an array of key-value pairs.
let flintstonesArray = Object.entries(flintstones)
  // .filter() looks through the array of pairs and only returns
  // the ones where the first element is "Barney".
  .filter(pair => pair[0] === "Barney")
  // .shift() removes the first element from the filtered array.
  .shift();

console.log(flintstonesArray); // ["Barney", 2]