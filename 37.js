// TODO: Write a js program to check whether character is an alphabet or not using conditional operator.

const isAlpha = (char) => {
  const alphaEx = /[a-zA-Z]/;
  alphaEx.exec(char) !== null
    ? console.log('its an alphabet')
    : console.log('alas! better luck next time');
};
