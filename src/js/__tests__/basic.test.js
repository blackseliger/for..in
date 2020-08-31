import { findValue, orderByProps, obj } from '../app';


describe('check findValue function', () => {
  test('must return numberValue', () => {
    const expected = 'мечник';
    const received = findValue(['name'], obj);
    expect(received).toEqual(expected);
  });
});

describe('check orderByProps function', () => {
  test('check firstKeyArr', () => {
    const expected = ['name'];
    const keys = Object.keys(obj);
    const received = (keys.filter((key) => key === 'name'));
    expect(received).toEqual(expected);
  });
  test('check SecondKeyArr', () => {
    const expected = ['level'];
    const keys = Object.keys(obj);
    const received = (keys.filter((key) => key === 'level'));
    expect(received).toEqual(expected);
  });
  test('check return arrayProps', () => {
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    const received = orderByProps(obj, ['name', 'level']);
    expect(received).toEqual(expected);
  });
});
