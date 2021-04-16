// TODO: Write a js program to find roots of a quadratic equation using switch case.

let roots = (a, b, c) => {
  let det = b * b - 4 * (a * c);

  switch (true) {
    case det > 0:
      console.log('There are two real roots');
      break;
    case det < 0:
      console.log('There are no real roots');
      break;
    case det == 0:
      console.log('There is one real root.');
      break;
    default:
      console.log('there was some error, try again');
      break;
  }
};

roots(1, -3, 4);
roots(-4, 12, -9);
roots(2, -11, 5);
