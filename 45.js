// TODO: Write a js program to create Simple Calculator using switch case.

const calc = (num1, num2, func) => {
  let res;
  switch (func) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
    case 'x':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
    case '%':
      res = num1 % num2;
      break;

    default:
      res = false;
      break;
  }
  res != false
    ? console.log(num1, func, num2, '=', res)
    : console.log('there was an error please try again!!');
};

calc(23, 233244, '%'); // 23 % 233244 = 23
