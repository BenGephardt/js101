/*
** Return a new version of this sentence that ends just before the word house. 
** Don't worry about spaces or punctuation: remove everything starting from 
** the beginning of house to the end of the sentence.
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

/*
** We can use the .slice() method to extract a portion of the string,
** starting from index 0 to the index of the word 'house' using the 
** .indexOf() method.
*/

advice.slice(0, advice.indexOf('house'));
// => 'Few things in life are as important as '
