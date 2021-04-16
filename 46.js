// TODO: Write a js program to count total number of negative elements in an array.

let negArr = (arr) => {
  let i = 0;
  arr.forEach((e) => {
    e < 0 ? ++i : i;
  });
  console.log(i, 'number of negative elements');
};

negArr([
  12,
  -23,
  -435,
  1243,
  -35,
  43,
  -1214,
  5332,
  3534,
  -325434,
  -356352,
  -3,
  23232,
  243424,
  -234,
]); //8 number of negative elements
