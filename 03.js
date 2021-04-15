// TODO: toggle case of each character of a string
let strToggleCase =
  'HjhUjjkH JHJkjjY324 UGYUhjKJyu   JlkjY Glih.lkjKUGkugl kjKK23 UjyglljKUGKUG LIHLIJLJ.kugFF';

let newArr = strToggleCase.split('');

let smR = /[a-z]/;
let capR = /[A-Z]/;
let none = /[^a-zA-z]/;
let m;
var i = 0;

const totog = (e, i) => {
  if ((m = smR.exec(e)) !== null) {
    e = e.toUpperCase();
    newArr[i] = e;
    console.log(e, i, 'l');
  } else if ((m = capR.exec(e[0])) !== null) {
    e = e.toLowerCase();
    newArr[i] = e;
    console.log(e, i, 'u');
  } else if ((m = none.exec(e[0])) !== null) {
    newArr[i] = e;
    console.log(e, i, 'oth');
  }
};

newArr.forEach((e) => {
  totog(e, i);
  i++;
});

newArr.join('');
