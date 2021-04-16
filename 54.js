// TODO: Write a js program to merge two array to third array.

let merge = () => {
  let array = [21, 432, 6565, 43, 32, 2, 1, 4, 6, 6];
  let arr2 = [454, 55476, 768, 86, 3234];
  let arr3 = [54, 78, 54, 78, 21, 3];

  array = array.concat([...arr2, ...arr3]);
  console.log(array);
};

merge();
