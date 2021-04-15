// TODO:  Write a js program to find total number of alphabets, digits or special character in a string.

let strr = `HjhUjjkH JHJkjjY32                    /sad/dsf \ vadfsow084567890p.][p]{}[][}{][{{}{}{]{}[}{][}{}{}{][}{}{}{}{;''lkjhrtyuiop';lkjhg'"'"'""""""~%^&*()*&^%$#$%^&*()*&^%$%^&*)(*&^%$#$%^&*()(*&^%$%^&*(Iuytfghjkl;?>LO:L"{}P{}|}{POIUYT|\ ?<>HGFGHUIOfdxcfghJKasafadasd4 UG         YU687686hjKJyu   JlkjY Glih.lkjKUGkugl kjKK23 UjyglljKUGKUG LIHLIJLJ.kugFF`;

let newArr = strr.split('');
console.log(newArr);

let alp = /[a-zA-Z]/;
let num = /[0-9]/;
let none = /[^a-zA-z]/;

var alphabets = 0;
number = 0;
other = 0;
newArr.forEach((e) => {
  let n;
  if ((n = alp.exec(e)) !== null) {
    alphabets++;
  } else if ((m = num.exec(e[0])) !== null) {
    number++;
  } else if ((m = none.exec(e[0])) !== null) {
    other++;
  }
});
let total = strr.length;
console.log(
  total,
  'total\n',
  alphabets,
  'alphabets\n',
  number,
  'digits\n',
  other,
  'special char'
);
