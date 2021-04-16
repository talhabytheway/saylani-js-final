// TODO: Write a js program to check whether a number is positive, negative or zero using switch case.

let posNeg = (num) => {
  switch (true) {
    case num > 0:
      console.log(num, 'is greater then zero');
      break;
    case num < 0:
      console.log(num, 'is less then zero');
      break;
    case num == 0:
      console.log(num, 'is zero');
      break;
    default:
      console.log('there was an error');
      break;
  }
};

posNeg(0);
posNeg(01);
posNeg(-1321);
