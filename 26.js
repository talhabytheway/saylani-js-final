// TODO:  Write a js program to input any alphabet and check whether it is vowel or consonant.

let val = 'a';

let RegVowles = /[aeiouAEIOU]/;

RegVowles.exec(val) !== null
  ? console.log('Hurray its a Vowl')
  : console.log('Opps its a Consonant');
