// TODO: Write a js program to find maximum between two numbers using switch case.

let maxN = (num1, num2) => {
  switch (true) {
    case num1 > num2:
      console.log(num1, 'is greater');
      break;

    default:
      console.log(num2, 'is greater');
      break;
  }
};
