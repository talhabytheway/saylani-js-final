// TODO: Write a js program to input any character and check whether it is alphabet, digit or special

let char = ';';
let alp = /[a-zA-Z]/;
let num = /[0-9]/;
let special = /[^a-zA-z]/;

if (alp.exec(char) !== null) {
  console.log('its a alphabet');
} else if (num.exec(char) !== null) {
  console.log('its a number');
} else if (special.exec(char) !== null) {
  console.log('its a special char');
}
