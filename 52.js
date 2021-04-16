// TODO: Write a js program to count total number of duplicate elements in an array

let duplicate = (array) => {
  let count = {};
  array.map((e) => {
    count[e] = count[e] ? ++count[e] : 1;
  });
  let i = 0;
  for (const key in count) {
    count[key] == 1 ? delete count[key] : i++;
  }
  console.table(count);
  console.log(i, 'number of duplicate elements found');
};

duplicate([
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
