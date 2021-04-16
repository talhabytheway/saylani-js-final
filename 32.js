// TODO: Write a js program to check whether a number is prime, Armstrong or perfect number using functions

const isPrime = (num) => {
  let flag;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      flag = true;
      break;
    }
  }

  !flag ? console.log(`${num} is prime`) : console.log(`${num} isn't prime`);
};

const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  sum == num ? console.log('perfect') : console.log('oops');
};

const isArmstrong = (num) => {
  num = parseInt(num);
  var numm = num.toString();
  numm = numm.split('');

  var sum = 0;
  var sqrr = [];
  for (let i = 0; i < numm.length; i++) {
    let sqr = 1;
    for (let j = 0; j < numm.length; j++) {
      sqr *= parseInt(numm[i]);
    }
    sqrr.push(sqr);
  }
  sqrr.forEach((e) => {
    sum += e;
  });

  if (sum == num) {
    console.log(num, 'is armstrong');
  } else {
    console.log(num, 'is not an armstrong');
  }
};
