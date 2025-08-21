/*
** Consider these two simple functions:
**
** function foo(param = "no") {
**  return "yes";
** }
**
** function bar(param = "no") {
**   return param === "no" ? "yes" : "no";
** }
** What will the following function invocation return?
**
** bar(foo());
*/

/*
** The function invocation would return "no".
** This is because foo will return "yes", and since "no" does not ===
** yes, bar will return "no" since the condition is false.
*/