/*
** What is the output of the following code?
**
** let answer = 42;
**
** function messWithIt(someNumber) {
**   return (someNumber += 8);
** }
**
** let newAnswer = messWithIt(answer);
**
** console.log(answer - 8);
*/

/*
** The output would be 34. While the variable newAnser would have a 
** value of 50, this does not change the value of the variable of anser 
** since that value is a number, numbers are primitive values and cannot be
** mutated.
** 
*/