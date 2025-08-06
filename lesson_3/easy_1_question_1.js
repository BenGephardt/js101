// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;


// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/*
** No, the code will not raise an error.
** Instead, it will create an three empty slots in the array.
** These slots will be at index 3, 4, and 5.

** For the bonus question, `numbers[4]` will return `undefined`,
** even though the array index is empty.
*/