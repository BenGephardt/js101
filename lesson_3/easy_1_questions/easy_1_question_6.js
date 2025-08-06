// We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

/*
** We can use the Object.assign() method to join the additionalAges
object to the ages object.
*/

Object.assign(ages, additionalAges);

console.log(ages);