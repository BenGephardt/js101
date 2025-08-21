/* 
** Write three different ways to remove all of the elements from the 
** following array:
*/

let numbers = [1, 2, 3, 4];

// WE can use the .length property to set the array's length to 0.
numbers.length = 0;

// We can use the .splice() method.
numbers.splice(0, numbers.length);

// We can use a while loop and the .pop() method.
while (numbers.length) {
  numbers.pop();
}