// TODO: Write a js program to find diameter, circumference and area of circle using functions.

let radius = 3;

const circle = (rad) => {
  let diameter = rad * 2;
  let circumference = 2 * Math.PI * rad;
  let area = rad * rad * Math.PI;

  console.log(
    `diameter: ${diameter}, circumference: ${circumference}, area: ${area}`
  );
};

circle(radius);
