// TODO: Write a js program to print all unique elements in the array

let unique = (array) => {
  let count = {};
  array.map((e) => {
    count[e] = count[e] ? ++count[e] : 1;
  });
  let unique = [];
  for (const key in count) {
    if (count[key] == 1) {
      unique.push(key);
    }
  }
  console.log(unique);
};

unique([
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
