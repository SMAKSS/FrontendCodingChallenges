// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

function recursiveFlatten(arr, newArr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      recursiveFlatten(item, newArr);
    } else {
      newArr.push(item);
    }
  }

  return newArr;
}

function flatten(arr) {
  if (!arr.length) return [];

  const newArr = [];

  return recursiveFlatten(arr, newArr);
}
