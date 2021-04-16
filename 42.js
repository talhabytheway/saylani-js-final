// TODO: Write a js program to check whether a number is even or odd using switch case

let even = (num) => {
  switch (true) {
    case num % 2 == 0:
      console.log(num, 'is even');
      break;

    default:
      console.log(num, 'is odd');
      break;
  }
};

even(322);
