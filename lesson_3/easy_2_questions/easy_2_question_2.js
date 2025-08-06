/*
** The Array.prototype.reverse method reverses the order of elements in an
** array, and Array.prototype.sort can rearrange the elements in a variety of
** ways, including descending. Both of these methods mutate the original array
** as shown below. Write two distinct ways of reversing the array without 
** mutating the original array. Use reverse for the first solution, and sort 
** for the second.
*/

let numbers = [1, 2, 3, 4, 5];
// We can use the `slice` method to create a shallow copy of the array.
let reversedArray = numbers.slice().reverse();

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(reversedArray); // [5, 4, 3, 2, 1]



numbers = [1, 2, 3, 4, 5];
// We can use Spread syntax to create a shallow copy of the array.
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sortedArray); // [5, 4, 3, 2, 1]

// Bonus:
numbers = [1, 2, 3, 4, 5];
let bonusArray = [];

/* We can use the `forEach` method to iterate over the array, 
** then use the `unshift` method to add elements to the front of the new array.
*/

numbers.forEach((number) => {
  bonusArray.unshift(number);
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(bonusArray); // [5, 4, 3, 2, 1]
