// Write a function that takes in as arguments two arrays arr1 = [1, 2, 6, 8, 17]  and arr2 = [4, 8, 6, 19, 12, 17]  and returns a new array containing the common elements of the two arrays in ascending order. Example result: result = [6, 8, 17]

function sort(arr1, arr2) {
  let newarr = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr2.includes(arr1[i])) {
        newarr.push(arr1[i]);
      }
    }
  }
  return newarr
}
console.log(sort([1, 2, 6, 8, 17], [4, 8, 6, 19, 12, 17]));
