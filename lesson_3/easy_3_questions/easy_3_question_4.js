// What will the following code output?


let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// The output will be [{ first: 42 }, { second: "value2" }, 3, 4, 5];.
/*
** This is because the slice() method creates a shallow copy of the array,
** meaning that it only copies the outermost values of the array.
** Since the the first two elements of the array are objects,
** the reference to the object is copied, not the object itself.
** This means that when we modify the object in arr2,
** it also modifies the object in arr1.
*/