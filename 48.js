// TODO: Write a js program to insert an element in an array.

const addElem = (element) => {
  let arr = [
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
  console.log('array before adding element', arr);

  arr.push(element);
  console.log('array after adding element', arr);
};
