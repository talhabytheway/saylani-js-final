// TODO: Write a js program to delete an element from an array at specified position

let arrayDel = (index) => {
  let array = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipisicing',
    'elit',
    'Maxime,',
    'sequi',
    'consectetur',
    'consequatur',
    'eius',
    'minima',
    'nisi',
    'nostrum',
    'modi',
    'mollitia',
    'quibusdam',
    'suscipit.',
  ];
  console.log(array);

  array.splice(index, 1);
  console.log(array);
};
// which index to delete
arrayDel(3);
