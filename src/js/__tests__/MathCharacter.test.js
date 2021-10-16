import Daemon from '../Daemon';
import Magician from '../Magician';

test('Атака корректно рассчитывается, если дурман не применён', () => {
  const meggi = new Magician('Meggi');
  meggi.attack = 100;
  meggi.distance = 2;
  meggi.datura = false;
  expect(meggi.attack).toBe(90);
});

test('Атака корректно расчитывается, если дурман применён', () => {
  const meggi = new Magician('Meggi');
  meggi.attack = 100;
  meggi.distance = 2;
  meggi.stoned = true;
  expect(meggi.attack).toBe(85);
});

test('Атака корректно расчитывается, если применён дурман, 2-й вариант', () => {
  const meggi = new Magician('Meggi');
  meggi.attack = 200;
  meggi.distance = 2;
  meggi.stoned = true;
  meggi.datura = true;
  expect(meggi.attack).toBe(175);
});

test('Если применён дурман и сила атаки стала меньше либо равна 0', () => {
  const daemon = new Daemon('Bob');
  daemon.attack = 3;
  daemon.distance = 4;
  daemon.stoned = true;
  expect(daemon.attack).toBe(0);
});
