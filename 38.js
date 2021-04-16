// TODO: Write a js program to print day of week name using switch case.

let getWeek = () => {
  let week = new Date().getDay();
  switch (week) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thrusday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Satday');
      break;
    default:
      console.log('opps there was an error');
      break;
  }
};

getWeek();
