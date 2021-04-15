// TODO: Write a js program to find sum of all odd numbers between 1 to n.

let n = 121;
let sum = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);
