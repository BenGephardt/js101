// What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

/*
** The first line will output `true` because the non-strict operator performs 
** type coerciion. This means it will convert the string to a number before 
** comparing, and since the number zero is falsey, the comparison is true.
**
** The second line will output 'false' because the strict equality operator 
** evaluates both the value and the type. Since one is a boolean and the 
** other a string, the comparison is false.
*/