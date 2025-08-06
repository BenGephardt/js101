/* 
** Determine whether the following object of people and their age contains 
** an entry for 'Spot':
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };


/* 
** We can use the Object.hasOwn() method to check an entry for 'Spot'.
** According to mdn, Object.hasOwn() is recommmended over hasOwnProperty(),
** in browsers where it is supported.
*/
let hasSpot = Object.hasOwn(ages, "Spot");

console.log(hasSpot); // false

