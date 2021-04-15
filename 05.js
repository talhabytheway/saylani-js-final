// TODO: Write a js program to count total number of vowels and consonants in a string

let str =
  'aJSLshahjhASHIUQWHSIUHAIUSashiAAUHHAQSIUHJDKJIUAYSAYAHSNASDFRGTREWRTYUKNBVCXZSDTYUJMNBVC XSDEDFTYrfdertytfdxcftygvffgtyTFCXCDFGTRTYU';
let newArr = str.split('');

let RegVowles = /[aeiouAEIOU]/;

let vow = 0;
let cons = 0;

newArr.forEach((e) => {
  let n;
  if ((n = RegVowles.exec(e)) !== null) {
    vow++;
  } else if ((m = RegVowles.exec(e[0])) == null) {
    cons++;
  }
});

console.log('Vowles', vow, '\nConsonants', cons);
console.log(newArr.length);
