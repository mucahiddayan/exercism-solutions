//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  const letters = str.split('');
  let current = letters[0];
  let counter = 1;
  let index = 1;
  let res = '';
  while (index < letters.length + 1) {
    if (letters[index] === current) {
      counter++;
      index++;
    } else {
      res += `${counter === 1 ? '' : counter}${current}`;
      current = letters[index];
      counter = 1;
      index++;
    }
  }
  return res;
};

export const decode = (str) => {
  return (str.match(/\d*\D/g) || [])
    .map((e) => [parseInt(e) || 1, e.match(/\D/)[0]])
    .reduce((acc, c) => `${acc}${c[1].repeat(c[0])}`, '');
};
