// TODO: Write a js program to copy all elements from an array to another array.

let copyArr = () => {
  let arr = [
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
  ];
  console.log('Array:', arr);

  newArr = [];
  newArr = [...arr];
  console.log('New Copied array;', newArr);
};

copyArr();
