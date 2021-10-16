import Magician from '../Magician';

test('Корректное создание объекта', () => {
  const received = new Magician('Meggi', 'Magician');
  const expected = {
    name: 'Meggi',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
    datura: false,
    distance: 1,
    coefDamagePower: 10,
  };
  expect(received).toEqual(expected);
});
