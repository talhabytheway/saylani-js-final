// TODO: Write a js program to check whether an alphabet is vowel or consonant using switch case.

const cons = (char) => {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      console.log('vowel');
      break;

    default:
      console.log('consonant');
      break;
  }
};
