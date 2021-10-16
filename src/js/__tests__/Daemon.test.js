import Daemon from '../Daemon';

test('Корректное создание объекта', () => {
  const received = new Daemon('Bob', 'Daemon');
  const expected = {
    name: 'Bob',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
    datura: false,
    distance: 1,
    coefDamagePower: 10,
  };
  expect(received).toEqual(expected);
});
