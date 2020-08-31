
const findValue = (numberKey, obj) => {
  for (const prop in obj) {
    if (prop.includes(numberKey) === true) {
      const numberValue = obj[prop];
      return numberValue;
    }
  }
  return null;
};

const orderByProps = (obj, arr) => {
  const arrayProps = [];
  const keys = Object.keys(obj);
  const firstKeyArr = (keys.filter((key) => key === arr[0]));
  const secondKeyArr = (keys.filter((key) => key === arr[1]));
  const firstValueArr = findValue(firstKeyArr, obj);
  const secondValueArr = findValue(secondKeyArr, obj);
  for (const prop in obj) {
    if (((prop === arr[0]) === false && (prop === arr[1]) === false)) {
      arrayProps.push({ key: prop, value: obj[prop] });
    }
  }
  arrayProps.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return null;
  });
  // eslint-disable-next-line max-len
  arrayProps.unshift({ key: firstKeyArr.join(), value: firstValueArr }, { key: secondKeyArr.join(), value: secondValueArr });
  return arrayProps;
};


const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const test1 = orderByProps(obj, ['name', 'level']);
console.log(test1);


export { findValue, orderByProps, obj };
