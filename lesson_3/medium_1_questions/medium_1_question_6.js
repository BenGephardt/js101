/* What do you think the following code will output?
**
** let nanArray = [NaN];
**
** console.log(nanArray[0] === NaN);
*/

/*
** The output would be false. == and === cannont determine weather 
** any value is NaN. The best way to determine if a value is NaN,
** would be Number.isNaN(nanArray[0]).
*/