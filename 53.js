// TODO: Write a js program to delete all duplicate elements from an array.

let deleteEle = (array) => {
  let count = {};
  array.map((e) => {
    count[e] = count[e] ? ++count[e] : 1;
  });
  let unique = [];
  for (const key in count) {
    unique.push(key);
  }
  console.log(unique);
};

deleteEle([
  2,
  4,
  6,
  33,
  2,
  5,
  7,
  3,
  1,
  4,
  5,
  76,
  8,
  9,
  6,
  43,
  2,
  2,
  1,
  3,
  4,
  65,
  7,
  5,
  3,
  2,
]);
